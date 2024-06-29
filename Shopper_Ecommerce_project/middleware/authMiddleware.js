import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
        // console.log(decode)

    } catch (error) {
        res.status(404).send({
            success: false,
            message: console.log(error.message),
        })
    }
}
const isAdmin = async (req, res, next) => {
    try {
        // const user = await userModel.findOne(req.user.role);
        if (req.user.isAdmin) {
            next()
        }
    } catch (error) {
        res.status(404).send({
            success: false,
            message: "Error in admin middleware",
            error: error.message
        })
    }
}
export { requireSignIn, isAdmin }

// here i am not using if(req.user.isAdmin) if else directly i'm using if and executing if block because error will show to user and i directky put into it catch block i.e redirecting is showing to the user insted of error 