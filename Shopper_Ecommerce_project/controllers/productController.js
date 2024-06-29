import { error } from "console";
import productModel from "../models/productModel.js";
import fs from 'fs';
import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;
        switch (true) {
            case !name:
                return res.status(500).send({ message: "Name is required" })
            case !description:
                return res.status(500).send({ message: "Description is required" })
            case !price:
                return res.status(500).send({ message: "price is required" })
            case !category:
                return res.status(500).send({ message: "category is required" })
            case !quantity:
                return res.status(500).send({ message: "Quantity is required" })
            // case !shipping:
            //     return res.status(500).send({ message: "Shipping is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({
                    message: "photo should be less than 1mb"
                })

        }
        const product = new productModel({ ...req.fields, slug: slugify(name) });
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        (await product.save());
        res.status(201).send({
            success: true,
            message: "Product created successfully",
            product
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error creating product",
            error: console.log(error.message)
        })
    }
}
const updateProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity } = req.fields;
        const { photo } = req.files;
        switch (true) {
            case !name:
                return res.status(500).send({ message: "Name is required" })
            case !description:
                return res.status(500).send({ message: "Description is required" })
            case !price:
                return res.status(500).send({ message: "Price is required" })
            case !category:
                return res.status(500).send({ message: "Category is required" })
            case !quantity:
                return res.status(500).send({ message: "Quantity is required" })
            case photo && photo.size > 1000000:
                return res.status(500).send({ message: "photo should be less than 1mb" })
        }
        const product = await productModel.findByIdAndUpdate(req.params.pid, { ...req.fileds, name, description, price, category, quantity, slug: slugify(name) }, { new: true })
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save();
        res.status(200).send({
            success: true,
            message: "Product updated successfully",
            product
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: console.log(error),
            error: console.log(error.message)
        })
    }
}
const getSingleProductController = async (req, res) => {
    try {
        // const { slug } = req.params;
        // const product = await productModel.findOne({ slug }); same----
        const product = await productModel.findOne({ slug: req.params.slug }).select("-photo").populate("category")
        res.status(200).send({
            success: true,
            message: "Getting single product successfully",
            product
        })
    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message
        })

    }
}
const getAllProductsController = async (req, res) => {
    try {
        const products = await productModel.find({}).select("-photo").limit(12).sort({ createdAt: -1 }).populate("category");
        res.status(200).send({
            success: true,
            message: "Getting all products successfully",
            products
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
const getProductPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo");
        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            res.status(200).send(product.photo.data);
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in while fetching the data",
            error: error.message

        })
    }
}
const deleteProductController = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.pid).select("-photo");
        if (!product) {
            return res.status(500).send({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "Product deleted successfully",
            product
        })
    } catch (error) {
        res.status(error.message).send({
            success: false,
            message: "error while deleting the product",
            error: error.message
        })

    }
}
const productFiltercontroller = async (req, res) => {
    try {
        const { checked, radio } = req.body;
        let args = {}
        if (checked.length > 0) args.category = checked
        if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] }
        const products = await productModel.find(args)
        res.status(200).send({ success: true, products })
    } catch (error) {
        console.log((error))
    }
}
const productcountController = async (req, res) => {
    try {
        const total = await productModel.find({}).estimatedDocumentCount();
        res.status(200).send({
            success: "true",
            total
        })
    } catch (error) {
        console.log(error)
    }
}
const productListController = async (req, res) => {
    try {
        const perPage = 8;
        const page = req.params.page ? req.params.page : 1;
        const products = await productModel.find({}).select("-photo").skip((page - 1) * perPage).limit(perPage).sort({ createdAt: -1 })
        res.status(200).send({
            success: "true",
            products
        })
    } catch (error) {
        res.status(400).send({
            success: "false",
            error: error.message
        })
    }
}
const searchController = async (req, res) => {
    try {
        const { keyword } = req.params;
        const results = await productModel.find({
            $or: [
                { name: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ],
        }).select("-photo")
        res.json(results)
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}
const similarProductController = async (req, res) => {
    try {
        const { pid, cid } = req.params;
        const product = await productModel
            .find({
                category: cid,
                _id: { $ne: pid },
            }).select("-photo").limit(20).populate("category");
        res.status(200).send({
            success: true,
            error: error.message,
            product
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.messages,
            message: console.log(error.message)
        })
    }
}
// get prdocyst by catgory
const productCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({ slug: req.params.slug });
        const products = await productModel.find({ category }).populate("category");
        res.status(200).send({
            success: true,
            category,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message: "Error While Getting products",
        });
    }
};
export {
    createProductController, updateProductController, getSingleProductController,
    getAllProductsController, getProductPhotoController, deleteProductController,
    productFiltercontroller, productcountController, productListController,
    searchController, similarProductController, productCategoryController
}