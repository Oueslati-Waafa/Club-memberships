// models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  region: String,
});

const User = mongoose.model("User", userSchema);

export default User;
