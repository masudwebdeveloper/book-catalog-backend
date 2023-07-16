"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const wishlistSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
});
exports.Wishlist = (0, mongoose_1.model)('Wishlist', wishlistSchema);
