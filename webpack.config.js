module.exports = {
  entry: "./src/index.js", // aca podriamos usar code splitting
  output: {
    filename: "main.js",
  },
  module: {
    // loader: objeto que contiene los "metodos" use y test. sabe procesar archivos que no sean js
    rules: [
      {
        test: /\.scss$/, // que archivos puedo load con el siguiente use?
        use: [ // loaders a aplicar
          'style-loader', // CSS al DOM
          'css-loader', // convierte CSS a CommonJS
          'sass-loader' // compila Sass a CSS
        ]
      },
    ],
  },
};
