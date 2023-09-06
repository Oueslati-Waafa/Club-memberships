// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";
import verifyToken from "../middlewares/verifyToken.js";

export const adminLogin = async (req, res) => {
  try {
    // Check if token is valid
    const token = req.headers["authorization"];
    if (token) {
      try {
        verifyToken(token); // If token is valid, admin is already authenticated
        return res
          .status(200)
          .json({ message: "Admin is already authenticated." });
      } catch (error) {
        return res.status(401).json({ error: "Invalid token. Please log in." });
      }
    }

    // If token is missing or invalid, proceed with login
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res
        .status(401)
        .json({ error: "Authentication failed: Admin not found." });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "Authentication failed: Invalid password." });
    }

    const newToken = jwt.sign(
      { username: admin.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Send admin data along with the token (excluding sensitive information like password)
    res.json({
      admin: {
        token: newToken,
        username: admin.username,
        email: admin.email,
        id: admin._id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

export const getAdminDataByUsername = async (req, res) => {
  try {
    const username = req.params.username;

    // Find the admin by username in the database
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found." });
    }

    // Send the admin data as a response (you can customize this as needed)
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ error: "Error fetching admin data." });
  }
};
