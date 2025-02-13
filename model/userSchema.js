const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    profile_picture: { type: String },
    number: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    role: {
      type: String,
      enum: ["ADMIN", "HR", "CANDIDATE"],
      default: "CANDIDATE",
    },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
