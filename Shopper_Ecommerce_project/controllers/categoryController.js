import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

const createCategoryController = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) {
            res.status(401).send({ message: "name is required" });
        }
        const existingCategory = await categoryModel.findOne({ name })
        if (existingCategory) {
            res.status(401).send({ message: "Category already exists" });
        }
        const category = await new categoryModel({ name, slug: slugify(name), }).save();
        res.status(201).send({ success: true, message: "Category created successfully", category });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error creating category", error: console.log(error.message) });
    }

}
const updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const updateCategory = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(200).send({ success: true, message: "Category updated successfully", updateCategory })
    } catch (error) {
        res.status(500).send({ success: false, message: "Error updating category", error })

    }
}
const getSingleCategory = async (req, res) => {
    try {
        const singleCategory = await categoryModel.findOne({ slug: req.params.slug })
        res.status(200).send({ success: true, message: "Getting single category successfully,single category", singleCategory })
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in getting single category", error: error.message })
    }
}

const getAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryModel.find({})
        res.status(200).send({ success: true, message: "Getting all category successfully", allCategory })
    } catch (error) {
        res.status(500).send({ success: false, message: "Error in getting all the category", error: error.message })
    }
}
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
        res.status(200).send({ success: true, message: "Category deleted successfully", deleteCategory })

    } catch (error) {
        res.status(500).send({ success: false, message: "Error in deleting the category", error: console.log(error.message) })
    }
}

export { createCategoryController, updateCategory, getSingleCategory, getAllCategory, deleteCategory } 