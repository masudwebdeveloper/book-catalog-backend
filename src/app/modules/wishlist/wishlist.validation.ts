import { z } from 'zod';

const addWishlistZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required' }).email(),
    status: z.string({ required_error: 'status is required' }),
    book: z.string({ required_error: 'book is required' }),
  }),
});

export const WishlistValidation = {
  addWishlistZodSchema,
};
