import mongoose from 'mongoose'

const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        //     required: true,
        //     unique: true
    },
    slug: {
        type: String,
        lowercase: true
    }
}, { timestamps: true })
export default mongoose.model('category', categoryModel)