import express from 'express';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createCategoryController, updateCategory, getSingleCategory, getAllCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/create-category', requireSignIn, isAdmin, createCategoryController)

router.put('/update-category/:id', requireSignIn, isAdmin, updateCategory)

router.get('/get-category/:slug', getSingleCategory)

router.get('/get-all-category', getAllCategory)

router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory)


export default router;