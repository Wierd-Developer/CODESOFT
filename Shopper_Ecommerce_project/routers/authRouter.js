import express from 'express';
import { forgotPasswordController, loginController, updateProfile, userRegisteration } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/user-registration', userRegisteration);
router.post('/login', loginController);

// protected routes
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})
router.put("/profile", requireSignIn, updateProfile)

router.post("/forgot-password", forgotPasswordController);


export default router;