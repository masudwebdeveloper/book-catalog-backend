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

router.patch('/:id', WishlistController.updateWishlist);
router.get('/:email', WishlistController.getWishlists);
router.delete('/:id', WishlistController.deleteWishlist);

export const WishlistRoutes = router;
