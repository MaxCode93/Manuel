# Puesta en marcha

Requisitos: navegador moderno. Opcionalmente un servidor estático (ej. `python -m http.server 8000`).

## Pasos
1. Clona el repositorio y entra a la carpeta.
2. Inicia un servidor estático en la raíz para evitar políticas de CORS al cargar los fragmentos:
   ```bash
   python -m http.server 8000
   ```
3. Abre `http://localhost:8000` en el navegador.
4. Navega por las secciones desde la barra superior; el router usa hashes (`#/ruta`).
5. Prueba el buscador, el cambio de idioma y el cambio de tema.

## Personalización
- Añade contenido en `pages/<nombre>.html` y registra la ruta en `js/app.js` dentro de `routes` y `pagesMeta`.
- Ajusta tokens de diseño en `css/base/variables.css` (colores, sombras, radios, espaciados).
- Usa `css/pages/` para estilos específicos y evita sobrecargar los componentes globales.
