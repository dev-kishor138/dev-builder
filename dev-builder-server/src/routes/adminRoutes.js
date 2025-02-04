import express from "express";
import { authenticateAdmin } from "../middleware/authMiddleware.js";
import { categryStore, deleteCategory, getAllCategory, getSingleCategory, updateCategory } from "../controllers/categoryController.js";
import { blogStore } from "../controllers/blogController.js";


const adminRoutes = express.Router();

// 🔒 Admin Only Route
adminRoutes.get("/profile", authenticateAdmin, (req, res) => {
    res.json({ message: "Welcome Admin!", user: req.user });
});

// category related routes 
adminRoutes.post('/category-store', authenticateAdmin, categryStore);
adminRoutes.get('/category-list', authenticateAdmin, getAllCategory);
adminRoutes.get('/category/:slug', authenticateAdmin, getSingleCategory);
adminRoutes.put('/category/update/:slug', authenticateAdmin, updateCategory);
adminRoutes.delete('/category/delete/:slug', authenticateAdmin, deleteCategory);

// Blog related Routes 
adminRoutes.post('/blog-store', authenticateAdmin, blogStore);



export default adminRoutes;