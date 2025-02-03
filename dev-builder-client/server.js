import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
connectDB();
// Enable CORS for all routes
app.use(cors());
// Middleware to parse JSON
app.use(express.json());


// user related routes 
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});