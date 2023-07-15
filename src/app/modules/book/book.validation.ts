import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    author: z.string({ required_error: 'title is required' }),
    publication: z.string({ required_error: 'title is required' }),
    genre: z.string({ required_error: 'title is required' }),
    thumnail: z.string({required_error: 'thumnailis required'}),
    wishList: z.array(z.string()).optional(),
    reviews: z.array(z.string()).optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
};
