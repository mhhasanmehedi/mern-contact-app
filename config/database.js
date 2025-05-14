import mongoose from "mongoose";

export const connectDB = () => {
  // mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud").then(() => {
  //   console.log("Database connected");
  // });
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected");
  });
};
