import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "name is required"]
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "password must be 6 character long"],
        minlength: 6
    },
    location: {
        type: String,
        default: "India"
    }
}, { timestamp: true })
userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
userSchema.methods.passwordCompare = async function (userpwd) {
    const isMatch = await bcrypt.compare(userpwd, this.password)
    return isMatch

}
userSchema.methods.createJWT = function () {
    const token = JWT.sign({ userId: this._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
    return token
}
export default mongoose.model("User", userSchema)