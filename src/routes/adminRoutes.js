// routes/adminRoutes.js
import express from "express";
import {
  adminLogin,
  getAdminDataByUsername,
} from "../controllers/authController.js";
import verifyToken from "../middlewares/verifyToken.js";
import membersController from "../controllers/membersController.js";

const adminRoutes = express.Router();

// Login Route
adminRoutes.post("/login", adminLogin);
adminRoutes.get("/getAdmin/:username", getAdminDataByUsername);

// members list route
adminRoutes.get(
  "/dashboard/members-list",
  verifyToken,
  membersController.listMembers
);
// one member details route
adminRoutes.get(
  "/dashboard/members-list/:id",
  verifyToken,
  membersController.getMemberById
);
// delete one member
adminRoutes.delete(
  "/dashboard/members/delete/:id",
  verifyToken,
  membersController.deleteMember
);

export default adminRoutes;
