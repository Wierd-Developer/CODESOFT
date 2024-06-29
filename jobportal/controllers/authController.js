import userModel from "../models/userModel.js"
export const userSignup = async (req, res, next) => {
    try {
        const { fname, email, password } = req.body
        if (!fname) {
            return next("name is required")
        }
        if (!email) {
            return next("email is required")
        }
        if (!password) {
            return next("password is required")
        }
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const user = await new userModel({
            fname,
            email,
            password

        }).save()
        const token = user.createJWT()
        res.status(201).json({
            success: true, message: "user registered successfully",
            user: {
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                password: user.password,
                location: user.location
            },
            token
        });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}
export const loginController = async (req, res,next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return next("All fields are required")
        }
        const user = await userModel.findOne({ email }).select("+password")
        if (!user) {
            return next("Email or Password is Invalid")
        }
        const isMatch = await user.passwordCompare(password)
        if (!isMatch) {
            return next("Email or Password is Invalid")
        }
        const token = user.createJWT()
        res.status(200).json({
            success: true,
            message: "Login Successfully",
            user,
            token
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }

}