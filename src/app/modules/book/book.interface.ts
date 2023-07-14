import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  publication: string;
  genre: string;
  reviews?: string[];
  wishList?: string[];
};

export type IFilters = {
  searchTerm?: string;
  title?: string;
  author?: string;
  genre?: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;