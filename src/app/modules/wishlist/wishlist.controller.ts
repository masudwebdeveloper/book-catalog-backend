import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IWishlist } from './wishlist.interface';
import httpStatus from 'http-status';
import { WishlistService } from './wishlist.service';

const addWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...wishlistData } = req.body;
    const result = await WishlistService.addWishlist(wishlistData);
    sendResponse<IWishlist>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist book added successfull',
      data: result,
    });
  }
);
const updateWishlist: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params;
      const updateData = req.body
      const result = await WishlistService.updateWishlist(id, updateData);
      sendResponse<IWishlist>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'wishlist book is update successfull',
        data: result,
      });
    }
  );

const getWishlists: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { email } = req.params;
    const result = await WishlistService.getWishlists(email);
    sendResponse<IWishlist[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'wishlist book retrieved successfully',
      data: result,
    });
  }
);

const deleteWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await WishlistService.deleteWishlist(id);
    sendResponse<IWishlist>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'wishlist book deleted successfully',
      data: result,
    });
  }
);



export const WishlistController = {
  addWishlist,
  getWishlists,
  deleteWishlist,
  updateWishlist,
};
