// adminInit.js
import bcrypt from "bcrypt";
import Admin from "../models/admin.js";


// this function is used to create the admin account
export const initializeAdmin = async (username, password,email) => {
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
      email
    });

    await newAdmin.save();
    console.log("Admin added successfully.");
  } catch (error) {
    console.error("Error adding admin:", error);
  }
};