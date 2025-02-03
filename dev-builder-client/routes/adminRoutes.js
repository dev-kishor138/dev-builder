import express from "express";
import { authenticateAdmin } from "../middleware/authMiddleware";


const adminRoutes = express.Router();

// 🔒 Admin Only Route
userRoutes.get("/admin", authenticateAdmin, (req, res) => {
    res.json({ message: "Welcome Admin!", user: req.user });
});



export default adminRoutes;