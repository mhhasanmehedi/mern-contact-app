import express from "express";
const router = express.Router();
import {
  addContact,
  addContactPage,
  deleteContact,
  getContacts,
  showContact,
  updateContact,
  updateContactPage,
} from "../controller/contacts.controller.js";

router.get("/", getContacts);
router.get("/show-contact/:id", showContact);
router.get("/add-contact", addContactPage);
router.post("/add-contact", addContact);
router.get("/update-contact/:id", updateContactPage);
router.post("/update-contact/:id", updateContact);
router.get("/delete-contact/:id", deleteContact);

export default router;
