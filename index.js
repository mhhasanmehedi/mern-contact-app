import express from "express";
const app = express();
import ContactRoutes from "./routes/contacts.routes.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

// MongoDB connection --------------------
connectDB();

// Middleware ----------------------------
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));

// Routes --------------------------------
app.use(ContactRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
