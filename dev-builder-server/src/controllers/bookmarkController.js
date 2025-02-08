import DevBuildError from "../lib/DevBuildError.js";
import { generateUniqueSlug } from "../lib/utilityFunction.js";
import Bookmark from "../models/BookMark.js";



// ✅ Create Bookmark
export const bookmarkStore = async (req, res, next) => {
    try {
        const { blogId, folderId } = req.body;
        const { id: userId } = req.user;
        if (!folderId) {
            throw new DevBuildError("FolderName is required", 400);
        }
        if (!blogId) {
            throw new DevBuildError("BlogId is required", 400);
        }
        const bookmark = new Bookmark({
            blogId,
            folderId,
            userId
        });
        await bookmark.save();
        res.status(201).json({ message: "Bookmark Created Successfully" });

    } catch (error) {
        // res.status(400).json({ error: error.message });
        next(error);
    }
}

// ✅ Get All Bookmark
export const getAllBookmark = async (req, res, next) => {
    try {
        const { userId } = req.user;
        const categories = await Bookmark.find({ status: "active", userId });
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
}


// ✅ Get Single Bookmark
export const getSingleBookmark = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const bookmark = await Bookmark.findOne({ slug }).populate('parent_bookmark_id');
        if (!bookmark) {
            throw new DevBuildError('Bookmark not found', 404);
        }
        // Find subcategories
        const subcategories = await Bookmark.find({ parent_bookmark_id: bookmark._id });
        bookmark.subcategories = subcategories;
        res.status(200).json(bookmark);
    } catch (error) {
        next(error);
    }
}


// ✅ Update Bookmark
export const updateBookmark = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const { bookmarkName, description, image, parent_bookmark_id } = req.body;

        // find Bookmark
        const bookmark = await Bookmark.findOne({ slug });
        if (!bookmark) {
            throw new DevBuildError('Bookmark not found', 404);
        }

        // If bookmarkName is change then generate new Slug
        let newSlug = bookmarkName ? await generateUniqueSlug(Bookmark, bookmarkName) : bookmark.slug;

        // parent_bookmark_id checked
        if (parent_bookmark_id) {
            const parentBookmark = await Bookmark.findById(parent_bookmark_id);
            if (!parentBookmark) {
                throw new DevBuildError('Invalid parent bookmark ID', 400);
            }
        }

        // ready for update data
        const updateData = {};
        if (bookmarkName && bookmarkName !== bookmark.bookmarkName) {
            updateData.bookmarkName = bookmarkName;
        }
        if (description && description !== bookmark.description) {
            updateData.description = description;
        }
        if (image && image !== bookmark.image) {
            updateData.image = image;
        }
        if (parent_bookmark_id && parent_bookmark_id !== bookmark.parent_bookmark_id) {
            updateData.parent_bookmark_id = parent_bookmark_id;
        }
        if (newSlug !== bookmark.slug) {
            updateData.slug = newSlug;
        }

        // when no changes
        if (Object.keys(updateData).length === 0) {
            return res.status(200).json({ message: 'Nothing to update' });
        }

        // Update The Bookmark
        await Bookmark.updateOne({ slug }, { $set: updateData });

        res.status(200).json({ message: 'Bookmark Updated Successfully' });
    } catch (error) {
        next(error);
    }
};



// ✅ Delete Bookmark
export const deleteBookmark = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const bookmark = await Bookmark.findOne({ slug });

        if (!bookmark) {
            throw new DevBuildError('Bookmark not found', 404);
        }

        // Soft delete the bookmark
        await bookmark.softDelete();
        res.status(200).json({ message: "Bookmark Deleted Successfully" });

    } catch (error) {
        next(error);
    }
}


