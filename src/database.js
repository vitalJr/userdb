import mongoose from 'mongoose';

class Database {
    constructor() {
        this.init();
    }

    init() {
        mongoose.connect('mongodb://localhost:27017/userdb',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true,
            },
            console.log('Database Conectado'));
    }
}

export default new Database();