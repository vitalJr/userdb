import express from 'express';
import routes from './routes';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import './database';

class App {

    constructor() {
        this.server = express();

        this.middleware();
        this.cors();
        this.uploadFile();
        this.routes();
    }

    helmet(){
        this.server.use(helmet())
    }

    cors(){
        this.server.use(cors());
    }

    middleware() {
        this.server.use(express.json());
    }

    uploadFile() {
        this.server.use('/files', express.static(
            path.resolve(__dirname, "..", "tmp", "uploads")
        ))
    }

    routes() {
        this.server.use(routes);
    }

}

export default new App().server;