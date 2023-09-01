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

    

    const hashedPassword = await bcrypt.hash(password, 10);
  

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