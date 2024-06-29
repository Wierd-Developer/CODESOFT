import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import authRouter from "./routers/authRouter.js";
import connectioDB from "./config/db.js";
import categoryRouter from "./routers/categoryRouter.js"
import productRouter from "./routers/productRouter.js"

const app = express();
// database calling
dotenv.config();

connectioDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
//api
app.use("/api/v1/emart/auth", authRouter);
app.use("/api/v1/emart/category", categoryRouter);
app.use('/api/v1/emart/product', productRouter);
// app.use("/", (req, res) => {
//     res.send("working fine")

// })


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});