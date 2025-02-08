import DevBuildError from "../lib/DevBuildError.js";
import Comment from "../models/Comment.js";


// ✅ Create Comment
export const createComment = async (req, res, next) => {
    try {
        const { userId, blogId, parentCommentId, message } = req.body;

        if (!userId) {
            throw new DevBuildError("User is required", 400);
        }
        if (!blogId) {
            throw new DevBuildError("Blog is required", 400);
        }
        if (!message) {
            throw new DevBuildError("Message is required", 400);
        }

        if (parentCommentId) {
            // Parent Comment থাকলে সেটি reply হিসেবে ধরবে
            const parentComment = await Comment.findById(parentCommentId);
            if (!parentComment) {
                throw new DevBuildError("Parent comment not found", 404);
            }
        }

        // Create a new comment or reply
        await Comment.create({ userId, blogId, message, parentCommentId });

        res.status(201).json({ message: "Comment added successfully" });

    } catch (error) {
        next(error);
    }
};

// ✅ Update Comments
export const updateComment = async (req, res, next) => {
    try {
        const { commentId, userId, message } = req.body;
        if (!commentId) {
            throw new DevBuildError("Comment ID is required", 400);
        }
        if (!userId) {
            throw new DevBuildError("User ID is required", 400);
        }
        if (!message) {
            throw new DevBuildError("Message is required", 400);
        }

        // Check if comment exists and belongs to the user
        const comment = await Comment.findOne({ _id: commentId, userId });
        if (!comment) {
            throw new DevBuildError("Comment not found or not authorized", 404);
        }

        // Update the comment
        comment.message = message;
        await comment.save();

        res.status(200).json({ message: "Comment updated successfully" });

    } catch (error) {
        next(error);
    }
};


// ✅ Delete Comments
export const deleteComment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { id: userId, role } = req.user;

        // 1️⃣ Check if comment exists
        const comment = await Comment.findOne({ _id: id });
        if (!comment) {
            throw new DevBuildError("Comment not found", 404);
        }

        // 2️⃣ Check if the user is the owner or an admin
        if (role !== "admin" && comment.userId.toString() !== userId) {
            throw new DevBuildError("Unauthorized: You can only delete your own comments", 403);
        }

        // 3️⃣ Soft delete the comment
        await comment.softDelete();

        // 4️⃣ Optional: Soft delete all replies of this comment
        await Comment.updateMany({ parentCommentId: id }, { deletedAt: new Date() }, { isDeleted: true });

        res.status(200).json({ message: "Comment deleted successfully" });

    } catch (error) {
        next(error);
    }
};

