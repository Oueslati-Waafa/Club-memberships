// routes/adminRoutes.js
import express from "express";
import { adminLogin } from "../controllers/authController.js"
import verifyToken from "../middlewares/verifyToken.js";
import membersController from "../controllers/membersController.js";

const adminRoutes = express.Router();

// Use your adminLogin function for login
adminRoutes.post("/login", adminLogin);

// Use verifyToken middleware and listMembers function for the dashboard
adminRoutes.get("/dashboard", verifyToken, membersController.listMembers);

export default adminRoutes;