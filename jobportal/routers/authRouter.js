import express from "express";
import { loginController, userSignup } from "../controllers/authController.js";

const router = express.Router();
router.post('/login', loginController)

router.post('/user-signup', userSignup);
export default router
