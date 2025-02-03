import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: "user" },
        phone: { type: String },
        image: { type: String },
        status: { type: String, default: "active" },
        isDeleted: { type: Boolean, default: false }, // Soft Delete ফিল্ড
    },
    { timestamps: true } // createdAt এবং updatedAt ফিল্ড যোগ করা
);

// Soft Delete মেথড
userSchema.methods.softDelete = async function () {
    this.isDeleted = true;
    await this.save();
};

// Restore মেথড (যদি প্রয়োজন হয়)
userSchema.methods.restore = async function () {
    this.isDeleted = false;
    await this.save();
};

// ডিফল্ট কোয়েরি মডিফাই করা
userSchema.pre(/^find/, function (next) {
    this.find({ isDeleted: { $ne: true } }); // শুধুমাত্র isDeleted: false ডকুমেন্ট ফেচ করবে
    next();
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;