"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
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
const cowSchema = new mongoose_1.Schema({
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
    reviews: [reviewSchema],
    thumnail: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
exports.Book = (0, mongoose_1.model)('Book', cowSchema);
