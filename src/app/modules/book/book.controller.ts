import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import { Request, Response } from 'express';
import { BookService } from './book.service';
import pick from '../../../shared/pick';
import { bookFilterableFields } from './book.constants';
import { paginationFields } from '../../../constants/paginationFields';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body;
  const result = await BookService.createBook(bookData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Added book successfully',
    data: result,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getBooks(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});
const getBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookService.getBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Book retrieved successfully',
    data: result,
  });
});

// const getCow = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await BookService.getCow(id);
//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'get cow retrieved successfully',
//     data: result,
//   });
// });

// const updateCow = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const updateData = req.body;
//   const result = await BookService.updateCow(id, updateData);
//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'cow update is successfully',
//     data: result,
//   });
// });

// const deleteCow = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await BookService.deleteCow(id);
//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'cow deleted is successfully',
//     data: result,
//   });
// });

export const BookController = {
  createBook,
  getBooks,
  getBook,
};
