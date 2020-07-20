import exphbs from 'express-handlebars';
import path from 'path';

const viewPath = path.resolve(__dirname, '..', 'view', 'emails');

export default {
    viewEngine: exphbs.create({
        layoutsDir: viewPath,
        partialsDir: path.resolve(viewPath, 'partials'),
        defaultLayout: 'deafault',
        extname: '.hbs'
    }),
    viewPath,
    extName: '.hbs'
}