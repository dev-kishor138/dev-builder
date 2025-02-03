import express from "express";
import { authenticateAdmin } from "../middleware/authMiddleware.js";
import { categryStore, getAllCategory } from "../controllers/categoryController.js";


const adminRoutes = express.Router();

// 🔒 Admin Only Route
adminRoutes.get("/profile", authenticateAdmin, (req, res) => {
    res.json({ message: "Welcome Admin!", user: req.user });
});

adminRoutes.post('/category-store', authenticateAdmin, categryStore);
adminRoutes.get('/category-list', authenticateAdmin, getAllCategory);



export default adminRoutes;