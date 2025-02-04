import express from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { blogStore } from "../controllers/blogController.js";

const userRoutes = express.Router();

// 🔒 Protected Route
userRoutes.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
});

// Blog related Routes 
userRoutes.post('/blog-store', authenticateUser, blogStore);



export default userRoutes;