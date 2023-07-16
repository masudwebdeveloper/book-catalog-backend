"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const reviewSchema = zod_1.z.object({
    avatar: zod_1.z.string({ required_error: 'title is required' }),
    name: zod_1.z.string({ required_error: 'title is required' }),
    date: zod_1.z.string({ required_error: 'title is required' }),
    review: zod_1.z.string({ required_error: 'title is required' }),
});
const createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'title is required' }),
        author: zod_1.z.string({ required_error: 'title is required' }),
        publication: zod_1.z.string({ required_error: 'title is required' }),
        genre: zod_1.z.string({ required_error: 'title is required' }),
        thumnail: zod_1.z.string({ required_error: 'thumnailis required' }),
        email: zod_1.z.string({ required_error: 'email is required' }).email(),
        reviews: zod_1.z.array(reviewSchema).optional(),
    }),
});
const updateBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        publication: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        reviews: zod_1.z.array(reviewSchema).optional(),
    }),
});
const updateBookReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        publication: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        reviews: zod_1.z.array(reviewSchema).optional(),
    }),
});
exports.BookValidation = {
    createBookZodSchema,
    updateBookZodSchema,
    updateBookReviewZodSchema,
};
