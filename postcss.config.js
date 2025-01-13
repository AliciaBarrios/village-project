const purgecss = require('@fullhuman/postcss-purgecss')({
    // Rutas de los archivos que usarán las reglas CSS
    content: ['./src/**/*.html', './src/**/*.js'], // Cambia "src" según la estructura de tu proyecto
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  });
  
  module.exports = {
    plugins: [
      // Otros plugins de PostCSS (si tienes)
      purgecss, // Incluye PurgeCSS aquí
    ],
  };