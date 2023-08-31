// adminInit.js
import bcrypt from "bcrypt";
import Admin from "../models/admin.js";

export const initializeAdmin = async (username, password) => {
  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      console.log("Admin already exists.");
      return;
    }

    console.log("Password before hashing:", password);

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    const newAdmin = new Admin({
      username,
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log("Admin added successfully.");
  } catch (error) {
    console.error("Error adding admin:", error);
  }
};