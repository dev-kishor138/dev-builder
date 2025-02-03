import DevBuildError from "../lib/DevBuildError.js";
import { generateSlug } from "../lib/utilityFunction.js";
import Category from "../models/Category.js";



// ✅ Create Category
export const categryStore = async (req, res, next) => {
    try {
        const { categoryName, description, image, parent_category_id } = req.body;

        let slug = generateSlug(categoryName);
        let existingCategory = await Category.findOne({ slug });
        let suffix = 1;
        while (existingCategory) {
            slug = `${generateSlug(categoryName)}-${suffix}`;
            existingCategory = await Category.findOne({ slug });
            suffix++;
        }

        if (parent_category_id) {
            const parentCategory = await Category.findById(parent_category_id);
            if (!parentCategory) {
                // return res.status(400).json({ error: 'Invalid parent category ID' });
                throw new DevBuildError('Invalid parent category ID', 400);
            }
        }

        const category = new Category({
            categoryName,
            slug,
            description: description || '',
            image: image || '',
            parent_category_id: parent_category_id || null,
        });
        await category.save();
        res.status(201).json({ message: "Category Created Successfully" });

    } catch (error) {
        // res.status(400).json({ error: error.message });
        next(error);
    }
}

// ✅ Get All Category
export const getAllCategory = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
}