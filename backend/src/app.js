import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";



/* Accessing .env content */
dotenv.config();

/* Creating express app */
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());


export default app;