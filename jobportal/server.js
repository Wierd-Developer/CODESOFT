import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRouter from './routers/authRouter.js'
import { connectDB } from './config/db.js';
import colors from 'colors'
import userRouter from './routers/userRouter.js'
import jobRouter from './routers/jobRouter.js'
import xss from 'xss-clean'
import helmet from 'helmet'
import mongoSanitize from "express-mongo-sanitize"


const app = express();

dotenv.config()

connectDB()

//middleware
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(express.json())
app.use(morgan("dev"))


app.use("/api/v1/auth", authRouter)
app.use('/api/v1/user', userRouter)
app.use("/api/v1/jobs", jobRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`.bgCyan.white)
})