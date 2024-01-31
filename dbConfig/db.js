import mongoose from "mongoose";

export async function connectDb() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.log("Something wrong with DB, please try again", error);
      throw new Error("Error connecting to db");
    }
  }
}
