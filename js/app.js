const WikiApp = (() => {
  const routes = ['inicio', 'crafting', 'objetos', 'personaje', 'guia', 'supervivencia', 'mapa', 'actualizaciones'];
  const pagesMeta = [
    { route: 'inicio', title: 'Inicio', description: 'Panel principal con buscador, estadísticas y accesos rápidos.', tags: ['hero', 'stats', 'updates'] },
    { route: 'crafting', title: 'Crafting', description: 'Recetas esenciales, materiales y árboles de fabricación.', tags: ['recetas', 'materiales', 'crafteo'] },
    { route: 'objetos', title: 'Objetos', description: 'Base de datos filtrable con rarezas, estadísticas y ubicaciones.', tags: ['items', 'loot', 'equipamiento'] },
    { route: 'personaje', title: 'Personaje', description: 'Atributos, habilidades, perks y builds recomendadas.', tags: ['skills', 'perks', 'builds'] },
    { route: 'guia', title: 'Guía', description: 'Tutoriales por nivel, rutas y consejos prácticos.', tags: ['tutorial', 'tips'] },
    { route: 'supervivencia', title: 'Supervivencia', description: 'Mecánicas, estados, peligros y estrategias.', tags: ['survival', 'peligros'] },
    { route: 'mapa', title: 'Mapa', description: 'Recursos, rutas y asentamientos clave.', tags: ['map', 'rutas'] },
    { route: 'actualizaciones', title: 'Actualizaciones', description: 'Historial de versiones y próximas features.', tags: ['patch', 'changelog'] }
  ];

  const setTheme = (theme) => {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  };

  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === 'light' ? 'dark' : 'light');
  };

  const loadPage = async (route) => {
    $('#loading-panel').prop('hidden', false);
    $('#empty-panel').prop('hidden', true);
    $('#content-panel').empty();

    try {
      const cached = CacheManager.get(`page:${route}`);
      if (cached) {
        $('#content-panel').html(cached).addClass('fade-in');
        $('#loading-panel').prop('hidden', true);
        return;
      }

      const response = await fetch(`pages/${route}.html`, { cache: 'force-cache' });
      const html = await response.text();
      CacheManager.set(`page:${route}`, html);
      $('#content-panel').html(html).addClass('fade-in');
    } catch (error) {
      $('#empty-panel').prop('hidden', false).find('.state').text('Error al cargar contenido');
    } finally {
      $('#loading-panel').prop('hidden', true);
    }
  };

  const initTheme = () => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
  };

  const initLanguage = () => {
    const saved = localStorage.getItem('lang') || 'es';
    Translations.setLanguage(saved);
    $('#language-switcher').val(saved);
    Translations.applyTranslations();
  };

  const bindEvents = () => {
    $('#theme-toggle').on('click', toggleTheme);
    $('#language-switcher').on('change', (e) => {
      const lang = e.target.value;
      localStorage.setItem('lang', lang);
      Translations.setLanguage(lang);
      Translations.applyTranslations();
    });
  };

  const initSearch = () => {
    SearchEngine.buildIndex(pagesMeta);
    SearchEngine.attach({
      input: '#search-input',
      results: '#search-results',
      onItemSelected: (route) => Router.navigate(route)
    });
  };

  const initRouting = () => {
    Router.init({
      defaultRoute: 'inicio',
      routes: routes.reduce((acc, route) => {
        acc[route] = { onEnter: loadPage };
        return acc;
      }, {})
    });
  };

  const init = () => {
    initTheme();
    initLanguage();
    bindEvents();
    initSearch();
    initRouting();
  };

  return { init };
})();

$(document).ready(() => {
  WikiApp.init();
});
