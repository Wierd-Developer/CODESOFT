import mongoose from "mongoose";
import jobModel from "../models/jobModel.js";

export const createJobController = async (req, res, next) => {
    try {
        const { company, position } = req.body;
        if (!company || !position) {
            return next("All fields are required");
        }
        req.body.createdBy = req.user.userId;
        const job = await jobModel.create(req.body)
        res.status(201).json({
            success: true,
            message: "Job created successfully",
            job,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}
export const getAllJobController = async (req, res, next) => {
    try {
        const { status, workType, search, sorting } = req.query;
        const queryStr = {
            createdBy: req.user.userId
        }
        if (status && status !== 'all') {
            queryStr.status = status
        }
        if (workType && workType !== 'all') {
            queryStr.workType = workType
        }
        if (workType && workType !== 'all') {
            queryStr.workType = workType
        }
        if (search) {
            queryStr.position = { $regex: search, $options: "i" }
        }
        let queryResult = jobModel.find(queryStr)
        if (queryResult.length === 0) {
            return next("No jobs found")
        }

        if (sorting === "latest") {
            queryResult = queryResult.sort("-createdAt")
        }
        if (sorting === "oldest") {
            queryResult = queryResult.sort("createdAt")
        }
        if (sorting === "a-z") {
            queryResult = queryResult.sort("position")
        }
        if (sorting === "z-a") {
            queryResult = queryResult.sort("-position")
        }
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skipPage = (page - 1) * limit;
        queryResult = queryResult.skip(skipPage).limit(limit);

        const totalJobs = await jobModel.countDocuments(queryResult)
        const noOfPages = Math.ceil(totalJobs / limit)
        const jobs = await queryResult
        // const jobs = await jobModel.find({ createdBy: req.user.userId })
        res.status(200).json({
            success: true,
            count: totalJobs,
            noOfPages,
            message: "Jobs fetched successfully",
            jobs
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}
export const updateJobController = async (req, res, next) => {
    try {
        const { id } = req.params
        const { company, position } = req.body
        if (!company || !position) {
            next("All fields are required")
        }
        const job = await jobModel.findOne({ _id: id })
        if (!job) {
            next("No job is found")
        }
        if (!req.user.userId === job.createdBy.toString()) {
            next("You are not authorized to update this job")
            return
        }
        const updatedJob = await jobModel.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        res.status(200).json({
            success: true,
            message: "Job updated successfully ", updatedJob
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
export const deleteJobController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const job = await jobModel.findOne({ _id: id });
        if (!job) {
            next("No job is found")
        }
        if (!req.user.userId === job.createdBy.toString()) {
            next("Access Denied")
            return
        }
        await job.deleteOne();
        res.status(200).json({
            success: true,
            message: "Job deleted successfully",
            job
        })

    } catch (error) {
        next(error)
    }
}
export const jobStats = async (req, res) => {
    const stats = await jobModel.aggregate([
        {
            $match: {
                createdBy: new mongoose.Types.ObjectId(req.user.userId),
            },
        },
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            }
        }
    ])
    const defaultStats = {
        pending: stats.pending || 0,
        reject: stats.reject || 0,
        interview: stats.interview || 0

    }
    res.status(200).json({
        defaultStats,
        totalJobs: stats.length, stats,
    })
}