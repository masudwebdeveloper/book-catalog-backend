"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const book_routes_1 = require("../modules/book/book.routes");
const wishlist_routes_1 = require("../modules/wishlist/wishlist.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/book',
        route: book_routes_1.BookRoutes,
    },
    {
        path: '/wishlist',
        route: wishlist_routes_1.WishlistRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.Routes = router;
