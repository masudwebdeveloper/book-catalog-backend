import { Router } from 'express';
import validateReqest from '../../middleware/validateRequest';
import { BookValidation } from './book.validation';
import { BookController } from './book.controller';

const router = Router();

router.post(
  '/create-book',
  validateReqest(BookValidation.createBookZodSchema),
  BookController.createBook
);

router.get('/:id', BookController.getBook);

router.delete('/:id', BookController.deleteBook);

router.patch(
  '/:id',
  validateReqest(BookValidation.updateBookZodSchema),
  BookController.updateBook
);

router.post(
  '/:id',
  validateReqest(BookValidation.updateBookReviewZodSchema),
  BookController.updateBookReview
);

router.get('/', BookController.getBooks);

export const BookRoutes = router;
