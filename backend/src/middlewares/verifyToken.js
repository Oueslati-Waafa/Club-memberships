// verifyToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function verifyToken(req, res, next) {
  const token = req.header("Authorization").split(" ")[1]; // Extract token from header
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Store user information in the request object
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token." });
  }
}

export default verifyToken;
