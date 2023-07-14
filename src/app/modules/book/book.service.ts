/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPaginationOptions } from '../../../interface/paginationOption';
import { IBook, IFilters } from './book.interface';
import { Book } from './book.model';
// import { IPaginationOptions } from '../../../interface/paginationOption';
import { IGenericResponse } from '../../../interface/common';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { bookSearchableFields } from './book.constants';
import { SortOrder } from 'mongoose';

const createBook = async (book: IBook): Promise<IBook | null> => {
  if (!book.wishList && !book.reviews) {
    book.wishList = [];
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

  // if (minPrice || maxPrice) {
  //   const priceCondition: any = {};

  //   if (minPrice) {
  //     priceCondition.$gte = minPrice;
  //   }
  //   if (maxPrice) {
  //     priceCondition.$lte = maxPrice;
  //   }

  //   andCondition.push({
  //     price: priceCondition,
  //   });
  // }

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

// const getCow = async (id: string): Promise<ICow | null> => {
//   const result = await Cow.findById(id).populate('seller');
//   return result;
// };

// const updateCow = async (
//   id: string,
//   payload: Partial<ICow>
// ): Promise<ICow | null> => {
//   const { ...updateData } = payload;
//   const result = await Cow.findOneAndUpdate({ _id: id }, updateData, {
//     new: true,
//   });
//   return result;
// };

// const deleteCow = async (id: string): Promise<ICow | null> => {
//   const result = await Cow.findByIdAndDelete(id).populate('seller');
//   return result;
// };

export const BookService = {
  createBook,
  getBooks,
};
