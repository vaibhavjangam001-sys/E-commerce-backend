import mongoose from "mongoose";
import constants from "../constants/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../configs/env.config.js";
import configs from "../configs/index.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [30, "Name cannot exceed 30 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [constants.REGEX.EMAIL_REGEX, "Please provide a valid email address"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      enum: Object.values(constants.ROLES),
      default: constants.ROLES.CUSTOMER,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    profileImage: {
      type: String,
    },

    refreshTokens: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
      role: this.role,
    },
    configs.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: configs.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: configs.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};

const User = mongoose.model("User", userSchema);

export default User;
