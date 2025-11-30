const Translations = (() => {
  const strings = {
    es: {
      site: { kicker: 'Day R Survival', title: 'Wiki interactiva' },
      nav: {
        home: 'Inicio',
        crafting: 'Crafting',
        items: 'Objetos',
        character: 'Personaje',
        guide: 'Guía',
        survival: 'Supervivencia',
        map: 'Mapa',
        updates: 'Actualizaciones'
      },
      actions: {
        searchLabel: 'Buscar en la wiki',
        searchPlaceholder: 'Buscar recetas, lugares, objetos...',
        theme: 'Tema'
      },
      states: {
        loading: 'Cargando contenido...',
        empty: 'No hay resultados disponibles.'
      },
      footer: {
        note: 'Comunidad Day R Survival · Actualizado para versión 1.999',
        updates: 'Historial de versiones',
        gettingStarted: 'Guía para empezar',
        map: 'Mapa interactivo'
      }
    },
    en: {
      site: { kicker: 'Day R Survival', title: 'Interactive Wiki' },
      nav: {
        home: 'Home',
        crafting: 'Crafting',
        items: 'Items',
        character: 'Character',
        guide: 'Guide',
        survival: 'Survival',
        map: 'Map',
        updates: 'Updates'
      },
      actions: {
        searchLabel: 'Search the wiki',
        searchPlaceholder: 'Search recipes, places, items...',
        theme: 'Theme'
      },
      states: {
        loading: 'Loading content...',
        empty: 'No results available.'
      },
      footer: {
        note: 'Day R Survival community · Updated for version 1.999',
        updates: 'Version history',
        gettingStarted: 'Getting started guide',
        map: 'Interactive map'
      }
    }
  };

  let current = 'es';

  const setLanguage = (lang) => {
    current = strings[lang] ? lang : 'es';
    document.documentElement.lang = current;
  };

  const t = (path) => {
    return path.split('.').reduce((acc, key) => acc && acc[key], strings[current]) || path;
  };

  const applyTranslations = () => {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder));
    });
  };

  return { setLanguage, applyTranslations, t };
})();
