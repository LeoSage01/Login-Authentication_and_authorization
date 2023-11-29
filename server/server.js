import express from "express";
import cors from "cors";
import morgan from "morgan";
import 'dotenv/config'
import mongoose from "mongoose";
import router from "./router/route.js";
import bodyParser from "body-parser";

const app = express();

/** middlewares */
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

// Increase the payload size limit (adjust the limit as needed)
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));

const port = 8080;

/** HTTP GET Request */
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use("/api", router);

/** start server only when we have valid connection */
mongoose.connect(process.env.ATLAS_URI )
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
