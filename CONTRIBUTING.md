# Guía de contribución

¡Gracias por querer mejorar la wiki! Sigue estas pautas para mantener la arquitectura limpia y consistente.

## Flujo de trabajo
1. Crea una rama descriptiva para tu cambio.
2. Si es UI, añade capturas cuando el cambio sea visible.
3. Asegúrate de que los fragmentos HTML de páginas vivan en `pages/` y usa estilos específicos en `css/pages/`.
4. Ejecuta pruebas manuales: navegación por todas las secciones, cambio de idioma y tema, búsqueda con 2-3 términos.

## Estilo de código
- **CSS**: metodología BEM y uso de variables definidas en `css/base/variables.css`. Evita valores mágicos repetidos.
- **JS**: patrón módulo IIFE, evitar globales; usa jQuery para eventos y manipulación DOM.
- **HTML**: semántico, con atributos `data-i18n` donde aplique.

## Internacionalización
- Añade nuevas cadenas en `js/translations.js` para ES y EN.
- Usa `data-i18n` o `data-i18n-placeholder` en elementos dinámicos.

## Performance
- Mantén las vistas livianas; si agregas recursos pesados, evalúa lazy loading.
- Reutiliza el cache manager para contenido repetido.
