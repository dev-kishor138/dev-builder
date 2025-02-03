import express from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

// 🔒 Protected Route
userRoutes.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
});



export default userRoutes;