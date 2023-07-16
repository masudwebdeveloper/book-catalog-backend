import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';

const addWishlist = async (payload: IWishlist): Promise<IWishlist> => {
  const { book } = payload;
  const exist = await Wishlist.findOne({ book: { _id: book } });
  if (exist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This book is Already Wishlist');
  }
  const result = (await Wishlist.create(payload)).populate('book');
  return result;
};

export const WishlistService = {
  addWishlist,
};
