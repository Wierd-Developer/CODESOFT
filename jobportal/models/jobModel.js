import mongoose from "mongoose";

const jobShema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, "Company is required"],

    },
    position: {
        type: String,
        required: [true, "Position is required"],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ["pending", "reject", "interview"],
        default: "pending"
    },
    workType: {
        type: String,
        enum: ["part-time", "full-time", "internship", "contract"],
        default: "full-time"
    },
    workLocation: {
        type: String,
        required: [true, "Work location is required"],
        default: "mumbai"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }

}, { timestamps: true })

export default mongoose.model("Jobs", jobShema)