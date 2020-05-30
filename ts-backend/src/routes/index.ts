import { Router } from 'express';
import user from './user';
import client from './client';
import vehicle from './vehicle';

const routes = Router();

routes.use('/users', user);
routes.use('/clients', client);
routes.use('/vehicles', vehicle);

export default routes;
