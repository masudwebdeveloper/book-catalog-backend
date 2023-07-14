import { Router } from 'express';
import { BookRoutes } from '../modules/book/book.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/book',
    route: BookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export const Routes = router;
