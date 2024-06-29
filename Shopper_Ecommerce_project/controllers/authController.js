import userModel from "../models/userModel.js";
import { hashing, comparePassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";
import { response } from "express";

const userRegisteration = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;
        if (!name) {
            return res.status(404).send({
                message: "Name is required"
            })
        }
        if (!email) {
            return res.status(404).send({
                message: "Email is required"
            })
        }
        if (!password) {
            return res.status(404).send({
                message: "Password is required"
            })
        }
        if (!phone) {
            return res.status(404).send({
                message: "Phone number is required"
            })
        }
        if (!address) {
            return res.status(404).send({
                message: "Address is required"
            })
        }
        if (!answer) {
            return res.status(404).send({
                message: "Answer is required"
            })
        }
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(404).send({
                success: false,
                message: "User already exist"
            })
        }
        const hashedPassword = await hashing(password);
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer
        }).save();
        res.status(200).send({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in User Registration",
            error
        })

    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Email or Password is invalid"
            })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(404).send({
                success: false,
                message: "Wrong Password"
            })
        }
        const token = await JWT.sign({ _id: user._id, isAdmin: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).send({
            success: true,
            message: "Login successfully",

            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in User Login",
            error: error.message
        })
    }
}
const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;
        if (!email) {
            return res.status(400).send("Email is required");
        }
        if (!answer) {
            return res.status(400).send("Answer is required");
        }
        if (!newPassword) {
            return res.status(400).send("New password is required");
        }
        const user = await userModel.findOne({ email, answer });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Wrong Email or Answer"
            });
        }
        const hashed = await hashing(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: true,
            message: "Password changed successfully"
        })
    } catch (error) {
        success = false,
            message = "Error in Password Change",
            error = error.message
        res.status(500).send({
            success,
            message,
            error
        })

    }

}
const updateProfile = async (req, res) => {
    try {
        const { name, password, phone, address } = req.body
        const user = await userModel.findById(req.user._id)

        //check password
        if (password && password.length < 6) {
            return res.json({ error: 'password must be at least 6 characters' })
        }
        const hashedPassword = password ? await hashing(password) : undefined
        const updateUser = await userModel.findByIdAndUpdate(req.user._id, {
            name: name || user.name,
            phone: phone || user.phone,
            password: hashedPassword || user.password,
            address: address || user.address

        }, { new: true })
        response.status(200).json({
            success: true,
            message: "Profile updated successfully",
            updateUser
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export { userRegisteration, loginController, forgotPasswordController, updateProfile };