import { Router } from 'express';
import multer from 'multer';

import LoginController from './controllers/LoginController';
import StudentController from './controllers/StudentController';
import UserController from './controllers/UserController';

import requireLogin from './middlewares/requireLogin';
import multerConfig from './config/multer';

const upload = multer(multerConfig);

const routes = Router();

// Login Routes
routes.post('/login', LoginController.login);

// User Routes
routes.get('/users', requireLogin, UserController.index);
routes.get('/users/:id', requireLogin, UserController.show);
routes.post('/users', requireLogin, UserController.store);
routes.put('/users/:id', requireLogin, UserController.update);
routes.delete('/users/:id', requireLogin, UserController.destroy);

// Student Routes
routes.get('/students', requireLogin, StudentController.index);
routes.get('/students/:id', requireLogin, StudentController.show);
routes.post('/students', requireLogin, upload.single('image'), StudentController.store);
routes.put('/students/:id', requireLogin, StudentController.update);
routes.delete('/students/:id', requireLogin, StudentController.destroy);

routes.post('/image/', upload.single('image'), (req, res) => res.json(req.file));

export default routes;
