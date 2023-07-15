import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const cowSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publication: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    wishList: {
      type: [String],
    },
    reviews: {
      type: [String],
    },
    thumnail: {
      type: String,
      required: true,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const Book = model<IBook, BookModel>('Book', cowSchema);
