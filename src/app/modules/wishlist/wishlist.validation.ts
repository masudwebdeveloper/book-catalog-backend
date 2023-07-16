import { z } from 'zod';

const addWishlistZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required' }).email(),
    book: z.string({ required_error: 'book is required' }),
  }),
});

export const WishlistValidation = {
  addWishlistZodSchema,
};
