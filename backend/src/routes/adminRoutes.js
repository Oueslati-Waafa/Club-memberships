// routes/adminRoutes.js
import express from "express";
import { adminLogin } from "../controllers/authController.js"
import verifyToken from "../middlewares/verifyToken.js";
import membersController from "../controllers/membersController.js";

const adminRoutes = express.Router();

// Login Route
adminRoutes.post("/login", adminLogin);

// members list route
adminRoutes.get("/dashboard/members-list", verifyToken, membersController.listMembers);
// one member details route
adminRoutes.get("/dashboard/members-list/:id", verifyToken, membersController.getMemberById);

export default adminRoutes;