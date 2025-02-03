import express from "express";
import { loginUser, refreshToken, registerUser } from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();


//🔗 Global Routes 
userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/refresh-token", refreshToken);


// 🔒 Protected Route
userRoutes.get("/profile", authenticateUser, (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
});



export default userRoutes;