import userModel from "../models/userModel.js"

export const userUpdate = async (req, res, next) => {
    try {
        const { fname, lname, email, location } = req.body
        if (!email || !fname || !lname || !location) {
            return next("Please provide all fields");
        }
        const user = await userModel.findByIdAndUpdate(req.user.userId, {
            fname: fname || user.fname,
            lname: lname || user.lname,
            email: email || user.email,
            location: location || user.location


        }, { new: true });
        const token = user.createJWT()
        res.status(200).json({
            user, token
        })

    } catch (error) {
        next(error.message)
    }
}
export const getUserController = async (req, res, next) => {
    try {
        const user = await userModel.findById({ _id: req.user.userId })
        if (!user) {
            return next("User not found")
        }
        res.status(200).json({
            success: true,
            message: "fetched user details",
            data: user,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
