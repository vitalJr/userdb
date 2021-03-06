// import exphbs from 'express-handlebars';
// import path from 'path';
const exphbs = require('express-handlebars');
const path = require('path');

const viewPath = path.resolve(__dirname, '..', 'view', 'emails');

module.exports = {
    viewEngine: exphbs.create({
        layoutsDir: viewPath,
        partialsDir: path.resolve(viewPath, 'partials'),
        defaultLayout: 'deafault',
        extname: '.hbs'
    }),
    viewPath,
    extName: '.hbs'
}

// export default {
//     viewEngine: exphbs.create({
//         layoutsDir: viewPath,
//         partialsDir: path.resolve(viewPath, 'partials'),
//         defaultLayout: 'deafault',
//         extname: '.hbs'
//     }),
//     viewPath,
//     extName: '.hbs'
// }