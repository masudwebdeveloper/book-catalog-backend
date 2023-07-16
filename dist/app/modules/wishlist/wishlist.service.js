"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const wishlist_model_1 = require("./wishlist.model");
const addWishlist = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { book } = payload;
    const exist = yield wishlist_model_1.Wishlist.findOne({ book: { _id: book } });
    if (exist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'This book is Already Wishlist');
    }
    const result = (yield wishlist_model_1.Wishlist.create(payload)).populate('book');
    return result;
});
const getWishlists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_model_1.Wishlist.find({ email }).populate('book');
    return result;
});
const deleteWishlist = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_model_1.Wishlist.findOneAndDelete({ _id: id }).populate('book');
    return result;
});
const updateWishlist = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = __rest(payload, []);
    const result = yield wishlist_model_1.Wishlist.findOneAndUpdate({ _id: id }, updateData, {
        new: true,
    }).populate('book');
    return result;
});
exports.WishlistService = {
    addWishlist,
    getWishlists,
    deleteWishlist,
    updateWishlist,
};
