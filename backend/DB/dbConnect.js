import mongoose from "mongoose";
import colour from "colour";
const CONNECTDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database Connected Successfully !!!".white);
  } catch (error) {
    console.log("DATABASE ERROR".red, error);
  }
};

export default CONNECTDB;
