import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectToDatabase from "./db/db.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("hii there i am yash chandra");
});

app.listen(process.env.PORT, () => {
  connectToDatabase();
  console.log("the server is running on the port:", process.env.PORT);
});
