const path = require("path");

module.exports = {
    entry: './src/AnalizadorSintactico.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production'
}