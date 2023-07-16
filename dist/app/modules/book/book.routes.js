"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
router.post('/create-book', (0, validateRequest_1.default)(book_validation_1.BookValidation.createBookZodSchema), book_controller_1.BookController.createBook);
router.get('/:id', book_controller_1.BookController.getBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
router.patch('/:id', (0, validateRequest_1.default)(book_validation_1.BookValidation.updateBookZodSchema), book_controller_1.BookController.updateBook);
router.post('/:id', (0, validateRequest_1.default)(book_validation_1.BookValidation.updateBookReviewZodSchema), book_controller_1.BookController.updateBookReview);
router.post('/:id', book_controller_1.BookController.addBookWishlist);
router.get('/', book_controller_1.BookController.getBooks);
exports.BookRoutes = router;
