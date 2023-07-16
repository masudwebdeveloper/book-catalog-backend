import { Schema, model } from 'mongoose';
import { BookModel, IBook, IReviews } from './book.interface';
const reviewSchema = new Schema<IReviews>({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

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
    reviews: [reviewSchema],
    thumnail: {
      type: String,
      required: true,
    },
    email: {
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
