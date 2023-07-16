/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPaginationOptions } from '../../../interface/paginationOption';
import { IBook, IFilters, IReviews } from './book.interface';
import { Book } from './book.model';
// import { IPaginationOptions } from '../../../interface/paginationOption';
import { IGenericResponse } from '../../../interface/common';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { bookSearchableFields } from './book.constants';
import { SortOrder } from 'mongoose';

const createBook = async (book: IBook): Promise<IBook | null> => {
  if (!book.reviews) {
    book.reviews = [];
  }
  const result = await Book.create(book);
  return result;
};

const getBooks = async (
  filters: IFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filterData } = filters;
  const { page, skip, limit, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);

  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filterData).length) {
    andCondition.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortCondition: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await Book.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments(whereCondition);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const { ...updateData } = payload;
  const result = await Book.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  });
  return result;
};
const updateBookReview = async (
  id: string,
  payload: IReviews
): Promise<IBook | null> => {
  const { ...updateData } = payload;

  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: updateData } },
    {
      new: true,
    }
  );
  return result;
};
const addBookWishlist = async (
  id: string,
  payload: string
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { wishList: payload } },
    {
      new: true,
    }
  );
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
  updateBookReview,
  addBookWishlist,
};
