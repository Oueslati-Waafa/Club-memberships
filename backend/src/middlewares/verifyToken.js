// verifyToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export default verifyToken;
