import DevBuildError from "../lib/DevBuildError.js";
import BlogReact from "../models/BlogReact.js";

// ✅ Create or update React
export const reactBlog = async (req, res, next) => {
    try {
        const { userId, blogId, react } = req.body;

        if (!userId) {
            throw new DevBuildError("User is required", 400);
        }
        if (!blogId) {
            throw new DevBuildError("Blog is required", 400);
        }

        // Check if the user already reacted to the blog
        const existingReact = await BlogReact.findOne({ userId, blogId });

        if (existingReact) {
            // Update existing react
            existingReact.react = react;
            await existingReact.save();
            return res.status(200).json({ message: "React updated" });
        }

        // Create new react if it doesn't exist
        await BlogReact.create({ userId, blogId, react });
        res.status(201).json({ message: "React created" });

    } catch (error) {
        console.error("Error in reactBlog:", error);
        next(error);
    }
}

