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

router.get('/', BookController.getBooks);

export const BookRoutes = router;
