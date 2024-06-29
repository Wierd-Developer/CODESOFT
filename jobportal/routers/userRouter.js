import express from 'express'
import { getUserController, userUpdate } from '../controllers/userProtected.js'
import authVerify from '../middleware/authVerify.js'

const router = express.Router()

router.put('/update-user', authVerify, userUpdate)
router.post('/get-user', authVerify, getUserController)
export default router