import express from 'express'
import { createJobController, deleteJobController, getAllJobController, jobStats, updateJobController } from '../controllers/jobController.js'
import authVerify from '../middleware/authVerify.js'

const router = express.Router()

router.post("/job-created", authVerify, createJobController)
router.post("/get-all-jobs", authVerify, getAllJobController)
router.put("/update-job/:id", authVerify, updateJobController)
router.delete("/delete-job/:id", authVerify, deleteJobController)
router.get("/job-stats", authVerify, jobStats)
export default router