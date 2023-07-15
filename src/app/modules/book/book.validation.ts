import { z } from 'zod';
const reviewSchema = z.object({
  avatar: z.string({ required_error: 'title is required' }),
  name: z.string({ required_error: 'title is required' }),
  date: z.string({ required_error: 'title is required' }),
  review: z.string({ required_error: 'title is required' }),
});
const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    author: z.string({ required_error: 'title is required' }),
    publication: z.string({ required_error: 'title is required' }),
    genre: z.string({ required_error: 'title is required' }),
    thumnail: z.string({ required_error: 'thumnailis required' }),
    wishList: z.array(z.string()).optional(),
    reviews: z.array(reviewSchema).optional(),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    publication: z.string().optional(),
    genre: z.string().optional(),
    thumbnail: z.string().optional(),
    wishList: z.array(z.string()).optional(),
    reviews: z.array(reviewSchema).optional(),
  }),
});
const updateBookReviewZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    publication: z.string().optional(),
    genre: z.string().optional(),
    thumbnail: z.string().optional(),
    wishList: z.array(z.string()).optional(),
    reviews: z.array(reviewSchema).optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
  updateBookReviewZodSchema
};
