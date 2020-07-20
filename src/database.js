// import mongoose from 'mongoose';
const mongoose = require('mongoose');

class Database {
    constructor() {
        this.init();
    }
    //Homologação
    // init() {
    //     mongoose.connect('mongodb://localhost:27017/userdb',
    //         {
    //             useNewUrlParser: true,
    //             useUnifiedTopology: true,
    //             useCreateIndex: true,
    //             useFindAndModify: true,
    //         },
    //         console.log('Database Conectado'));
    // }

    //Produção
    init() {
        mongoose.connect('mongodb+srv://vitaljr:java170228@cluster0.wneoi.mongodb.net/<dbname>?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true,
            },
        )
    }
}


export default new Database();