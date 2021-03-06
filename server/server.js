import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import cityRoute from "./routes/cityRoute.js";
import userRoute from "./routes/userRoute.js"; 
import doseRoute from "./routes/doseRoute.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({
      status_code: 503,
      status_message: "Service Unavailable"
    })
  };
});

app.use("/", cityRoute);
app.use("/", userRoute);
app.use("/", doseRoute);

app.get("/", (req, res) => {
  res.json({
    "Routes": [
      {
        "path": "/cities",
        "methods": "GET"
      },
      {
        "path": "/user/:userId",
        "methods": "GET"
      },
      {
        "path": "/user/:userId/doses",
        "methods": "GET"
      },
      {
        "path": "/register",
        "method": "POST"
      },
      {
        "path": "/login",
        "method": "POST"
      },
      {
        "path": "/user/:userId",
        "methods": "PUT"
      },
      {
        "path": "/user/:userId/dose/:doseId",
        "methods": "PATCH"
      },
      {
        "path": "/dose",
        "methods": "GET"
      },
      {
        "path": "/dose",
        "methods": "POST"
      },
      {
        "path": "/dose/:doseId",
        "methods": "DELETE"
      }
    ]
  });
});

app.listen(port);

