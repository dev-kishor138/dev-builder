import { generateUniqueSlug } from "../lib/utilityFunction.js";
import Blog from "../models/Blog.js";



// ✅ Create Blog
export const blogStore = async (req, res, next) => {
    // console.log('from blog controller:', JSON.stringify(req.body, null, 2));
    try {
        const { userId, categoryId, title, description, image } = req.body;

        let slug = generateUniqueSlug(Blog, title);

        const blog = new Blog({
            userId,
            categoryId,
            slug,
            title,
            description: description || '',
            image: image || '',
        });
        await blog.save();
        res.status(201).json({ message: "Blog Created Successfully" });

    } catch (error) {
        // console.log(error);
        next(error);
    }
}