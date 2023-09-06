import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import membersController from "./controllers/membersController.js"
import adminRoutes from "./routes/adminRoutes.js"
import { initializeAdmin } from './controllers/adminInit.js'; // Import your initialization function



/* Accessing .env content */
dotenv.config();

/* Creating express app */
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
initializeAdmin("admin", "09y&7Qw7#0t1.","oueslatiwafa454@gmail.com");
app.use(bodyParser.json());


// Define registration route
app.post('/register', membersController.registerUser);
// Use your adminRoutes
app.use("/admin", adminRoutes);


export default app;