import { Router } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import checkCredencials from './middlewares/checkCredencials';
import RecoveryController from './controllers/RecoveryController';
import FileController from './controllers/FileController';

import multer from 'multer';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/recovery', RecoveryController.store);
routes.put('/recovery', RecoveryController.update);


routes.post('/files', upload.single('file'), FileController.store);

routes.post('/users', UserController.store);
routes.get('/listUsers', UserController.list);
routes.post('/auth', AuthController.store);

routes.use(checkCredencials);
routes.get('/users', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);



export default routes;