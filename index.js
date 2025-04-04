const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Contact = require("./models/contacts.model");

// MongoDB connection --------------------
mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud").then(() => {
  console.log("Database connected");
});

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
app.get("/", async (req, res) => {
  const contacts = await Contact.find();

  res.render("home", {
    contacts,
  });
});

app.get("/show-contact/:id", async (req, res) => {
  const { id } = await req.params;

  // Find the contact by ID
  const contact = await Contact.findById(id);

  res.render("show-contact", {
    contact,
  });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", (req, res) => {});

app.get("/update-contact/:id", (req, res) => {
  res.render("update-contact");
});

app.post("/update-contact", (req, res) => {});

app.delete("/delete-contact/:id", (req, res) => {});

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
