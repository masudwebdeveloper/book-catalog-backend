import { Router } from 'express';
import validateReqest from '../../middleware/validateRequest';
import { WishlistValidation } from './wishlist.validation';
import { WishlistController } from './wishlist.controller';

const router = Router();

router.post(
  '/add_wishlist',
  validateReqest(WishlistValidation.addWishlistZodSchema),
  WishlistController.addWishlist
);

export const WishlistRoutes = router;
