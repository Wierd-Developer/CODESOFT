import express from 'express';

import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController, deleteProductController, getAllProductsController, getProductPhotoController, getSingleProductController, productCategoryController, productFiltercontroller, productListController, productcountController, searchController, similarProductController, updateProductController } from '../controllers/productController.js';

import expressFormidable from 'express-formidable';

const router = express.Router()

router.post("/create-product", requireSignIn, isAdmin, expressFormidable(), createProductController)

router.put("/update-product/:pid", requireSignIn, isAdmin, expressFormidable(), updateProductController)

router.get("/single-product/:slug", getSingleProductController)

router.get("/get-all-product/", getAllProductsController)

router.get("/get-product-photo/:pid", getProductPhotoController)

router.delete("/product-delete/:pid", deleteProductController)

router.post("/product-filter", productFiltercontroller)

router.get("/product-count", productcountController)

router.get("/product-list/:page", productListController)

router.get("/search/:keyword", searchController)

router.get("/similar-product/:pid/:cid", similarProductController)

//category wise product
router.get("/product-category/:slug", productCategoryController);



export default router;
