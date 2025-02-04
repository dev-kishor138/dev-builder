import { generateSlug } from "../lib/utilityFunction.js";
import Blog from "../models/Blog.js";



// ✅ Create Blog
export const blogStore = async (req, res, next) => {
    // console.log('from blog controller:', JSON.stringify(req.body, null, 2));
    try {
        const { userId, categoryId, title, description, image } = req.body;

        // console.log(title);

        let slug = generateSlug(title);
        let existingBlogTitle = await Blog.findOne({ slug });
        let suffix = 1;
        while (existingBlogTitle) {
            slug = `${generateSlug(title)}-${suffix}`;
            existingBlogTitle = await Blog.findOne({ slug });
            suffix++;
        }

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