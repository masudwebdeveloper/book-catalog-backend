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

const getWishlists = async (email: string): Promise<IWishlist[]> => {
  const result = await Wishlist.find({ email }).populate('book');
  return result;
};

const deleteWishlist = async (id: string): Promise<IWishlist | null> => {
  const result = await Wishlist.findOneAndDelete({ _id: id }).populate('book');
  return result;
};

const updateWishlist = async (
  id: string,
  payload: Partial<IWishlist>
): Promise<IWishlist | null> => {
  const { ...updateData } = payload;
  const result = await Wishlist.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  }).populate('book');
  return result;
};

export const WishlistService = {
  addWishlist,
  getWishlists,
  deleteWishlist,
  updateWishlist,
};
