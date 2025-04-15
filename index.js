const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Contact = require("./models/contacts.model");

// MongoDB connection --------------------
// mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud").then(() => {
//   console.log("Database connected");
// });
mongoose
  .connect(
    "mongodb+srv://mehedi123:mehedi123@cluster0.o7cpz.mongodb.net/contacts-crud?retryWrites=true&w=majority"
  )
  .then(() => {
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

app.post("/add-contact", async (req, res) => {
  // await Contact.insertOne({
  // first_name: req.body.first_name,
  // last_name: req.body.last_name,
  // phone: req.body.phone,
  // address: req.body.address,
  // email: req.body.email,
  // });
  await Contact.create(req.body);

  res.redirect("/");
});

app.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
});

app.post("/update-contact/:id", async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.get("/delete-contact/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
