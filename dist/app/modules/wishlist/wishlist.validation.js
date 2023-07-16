"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistValidation = void 0;
const zod_1 = require("zod");
const addWishlistZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'email is required' }).email(),
        status: zod_1.z.string({ required_error: 'status is required' }),
        book: zod_1.z.string({ required_error: 'book is required' }),
    }),
});
exports.WishlistValidation = {
    addWishlistZodSchema,
};
