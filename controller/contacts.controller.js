import Contact from "../models/contacts.model.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();

  res.render("home", {
    contacts,
  });
};

export const showContact = async (req, res) => {
  const { id } = await req.params;

  // Find the contact by ID
  const contact = await Contact.findById(id);

  res.render("show-contact", {
    contact,
  });
};

export const addContactPage = (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {
  // await Contact.insertOne({
  // first_name: req.body.first_name,
  // last_name: req.body.last_name,
  // phone: req.body.phone,
  // address: req.body.address,
  // email: req.body.email,
  // });
  await Contact.create(req.body);

  res.redirect("/");
};

export const updateContactPage = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
};

export const updateContact = async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
