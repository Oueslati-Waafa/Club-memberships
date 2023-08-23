import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import membersController from "./controllers/membersController.js"


/* Accessing .env content */
dotenv.config();

/* Creating express app */
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());


// Define registration route
app.post('/register', membersController.registerUser);

export default app;