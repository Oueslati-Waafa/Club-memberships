// models/Admin.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});



const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
