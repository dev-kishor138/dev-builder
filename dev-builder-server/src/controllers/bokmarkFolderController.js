import DevBuildError from "../lib/DevBuildError.js";
import { generateUniqueSlug } from "../lib/utilityFunction.js";
import BookmarkFolder from "../models/BookmarkFolder.js";



// ✅ Create BookmarkFolder
export const bookmarkFolderStore = async (req, res, next) => {
    try {
        const { folderName } = req.body;
        const { id: userId } = req.user;

        if (!folderName) {
            throw new DevBuildError("FolderName is required", 400);
        }
        let slug = await generateUniqueSlug(BookmarkFolder, folderName);

        const bookmarkFolder = new BookmarkFolder({
            userId,
            folderName,
            slug,
        });
        await bookmarkFolder.save();
        res.status(201).json({ message: "BookmarkFolder Created Successfully" });

    } catch (error) {
        next(error);
    }
}

// ✅ Get All BookmarkFolder
export const getAllBookmarkFolder = async (req, res, next) => {
    try {
        const { id: userId, role } = req.user; 

        let filter = { status: "active" };

        if (role !== "admin") {
            filter.userId = userId;
        }

        const bookmarkFolders = await BookmarkFolder.find(filter);
        res.status(200).json(bookmarkFolders);

    } catch (error) {
        next(error);
    }
};



// ✅ Get Single BookmarkFolder
// export const getSingleBookmarkFolder = async (req, res, next) => {
//     try {
//         const { slug } = req.params;
//         const bookmarkFolder = await BookmarkFolder.findOne({ slug }).populate('parent_bookmarkFolder_id');
//         if (!bookmarkFolder) {
//             throw new DevBuildError('BookmarkFolder not found', 404);
//         }
//         // Find subcategories
//         const subcategories = await BookmarkFolder.find({ parent_bookmarkFolder_id: bookmarkFolder._id });
//         bookmarkFolder.subcategories = subcategories;
//         res.status(200).json(bookmarkFolder);
//     } catch (error) {
//         next(error);
//     }
// }


// ✅ Update BookmarkFolder
export const updateBookmarkFolder = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const { folderName } = req.body;
        const { userId } = req.user;

        // if (!userId) {
        //     throw new DevBuildError("User is required", 400);
        // }

        // find BookmarkFolder
        const bookmarkFolder = await BookmarkFolder.findOne({ slug, userId });
        if (!bookmarkFolder) {
            throw new DevBuildError('BookmarkFolder Not Found', 404);
        }

        // If bookmarkFolderName is change then generate new Slug
        let newSlug = folderName ? await generateUniqueSlug(BookmarkFolder, folderName) : bookmarkFolder.slug;

        // ready for update data
        const updateData = {};
        if (folderName && folderName !== bookmarkFolder.folderName) {
            updateData.folderName = folderName;
        }
        if (newSlug !== bookmarkFolder.slug) {
            updateData.slug = newSlug;
        }

        // when no changes
        if (Object.keys(updateData).length === 0) {
            return res.status(200).json({ message: 'Nothing to update' });
        }

        // Update The BookmarkFolder
        await BookmarkFolder.updateOne({ slug }, { $set: updateData });

        res.status(200).json({ message: 'BookmarkFolder Updated Successfully' });
    } catch (error) {
        next(error);
    }
};



// ✅ Delete BookmarkFolder
export const deleteBookmarkFolder = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const { userId } = req.user;
        const bookmarkFolder = await BookmarkFolder.findOne({ slug, userId });

        if (!bookmarkFolder) {
            throw new DevBuildError('BookmarkFolder not found', 404);
        }

        // Soft delete the bookmarkFolder
        await bookmarkFolder.softDelete();
        res.status(200).json({ message: "BookmarkFolder Deleted Successfully" });

    } catch (error) {
        next(error);
    }
}


