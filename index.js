import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import services from "./routes/posts.js";
import jobs from "./routes/jobs.js";
import user from "./routes/user.js";
import login from "./routes/login.js";
import connectDB from "./db/connect.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/services", services);
app.use("/api/jobs", jobs);
app.use("/api/user", user);
app.use("/api/login", login);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://asim:dantheman55@cluster0.2gekd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

start();
