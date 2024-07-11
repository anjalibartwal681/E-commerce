import express from "express";
import userRouter from "./routes/user.routes.js";
import dotenv from "dotenv";
import morgan from "morgan";
import colour from "colour";
import cors from "cors";
import CONNECTDB from "./DB/dbConnect.js";
dotenv.config();
const server = express();

// middleware
server.use(express.json());
server.use("/api/v1/user", userRouter);
server.use(morgan("dev"));
server.use(
  cors()
);

server.listen(process.env.PORT, () => {
  CONNECTDB();
  console.log(
    `\nServer Running At ${process.env.PORT} In ${process.env.MODE} Mode`.blue
  );
});
