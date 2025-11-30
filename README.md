# Day R Survival Wiki SPA

Single Page Application tipo wiki construida con HTML5, CSS modular y jQuery para navegación sin recargas, búsqueda en tiempo real, temas claro/oscuro e internacionalización ES/EN.

## Estructura
```
index.html
css/
  base/ (reset, variables, tipografía)
  components/ (botones, tarjetas, navegación)
  layout/ (grid, layout magazine, responsive)
  pages/ (estilos específicos por sección)
  utilities/ (animaciones y helpers)
js/
  app.js (núcleo SPA)
  router.js (routing con hash)
  cache.js (memoria + localStorage)
  search.js (búsqueda con debounce)
  translations.js (i18n ES/EN)
pages/ (fragmentos HTML dinámicos)
assets/ (iconos e imágenes)
```

## Características
- SPA con routing hash y carga dinámica de 8 secciones (Inicio, Crafting, Objetos, Personaje, Guía, Supervivencia, Mapa, Actualizaciones).
- Temas claro/oscuro persistentes en `localStorage` y tokens de diseño con variables CSS.
- Sistema de diseño magazine: grid responsive, tarjetas con bordes en gradiente, filtros y estados de UI.
- Búsqueda en tiempo real con índice de páginas y resultados desplegables.
- Internacionalización ES/EN y soporte de placeholders traducidos.
- Caché de fragmentos HTML en memoria y `localStorage` para cargas rápidas.

## Uso
1. Abre `index.html` en un servidor estático (o directamente en navegador moderno). La navegación funciona con hash.
2. Cambia tema con el botón "Tema" y el idioma con el selector ES/EN (persisten en `localStorage`).
3. Usa la barra de búsqueda para saltar a cualquier sección; selecciona un resultado para navegar sin recarga.

## Desarrollo
- Estilos: metodología BEM, variables CSS para theming y responsive mobile-first en `css/`.
- JS: patrón módulo en `js/`, eventos con jQuery y manejo de estado ligero en `app.js`.
- Contenido: cada sección vive en `pages/<ruta>.html` y se cachea tras la primera carga.

## Accesibilidad y performance
- Enfoque visible con `:focus-visible`, contrastes ajustados para dark/light.
- Animaciones suaves (`fade-in`, shimmer), uso de fuentes con `preconnect`.
- Carga diferida de módulos JS con `defer` y caché local de contenido.
