import { Model } from 'mongoose';
export type IReviews = {
  avatar: string;
  name: string;
  review: string;
  date: string;
};
export type IBook = {
  title: string;
  author: string;
  publication: string;
  genre: string;
  reviews?: IReviews[];
  wishList?: string[];
  thumnail: string;
  email: string;
};

export type IFilters = {
  searchTerm?: string;
  title?: string;
  author?: string;
  genre?: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
