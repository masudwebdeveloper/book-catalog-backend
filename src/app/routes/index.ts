import { Router } from 'express';
import { BookRoutes } from '../modules/book/book.routes';
import { WishlistRoutes } from '../modules/wishlist/wishlist.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/book',
    route: BookRoutes,
  },
  {
    path: '/wishlist',
    route: WishlistRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export const Routes = router;
