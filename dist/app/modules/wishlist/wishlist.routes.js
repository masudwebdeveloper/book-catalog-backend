"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const wishlist_validation_1 = require("./wishlist.validation");
const wishlist_controller_1 = require("./wishlist.controller");
const router = (0, express_1.Router)();
router.post('/add_wishlist', (0, validateRequest_1.default)(wishlist_validation_1.WishlistValidation.addWishlistZodSchema), wishlist_controller_1.WishlistController.addWishlist);
router.patch('/:id', wishlist_controller_1.WishlistController.updateWishlist);
router.get('/:email', wishlist_controller_1.WishlistController.getWishlists);
router.delete('/:id', wishlist_controller_1.WishlistController.deleteWishlist);
exports.WishlistRoutes = router;
