const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModel");

// Get all contacts
// Get /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await contact.find();
    res.render("index", { contacts: contacts });
});

// Create Contact
// Post /contacts
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.send("필수 값이 입력되지 않았습니다.");
    }

    const contact = await contact.create({
        name, email, phone
    });
    res.send("Create Contact");
});

// Get contact
// Get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const contact = await contact.findById(req.params.id);
    res.send(`View Contact for ID: ${req.params.id}`);
});

// Update contact
// PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;

    const contact = await contact.findById(id);
    if (!contact) {
        throw new Error("Contact not found");
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    res.json(contact);
});

// Delete contact
// DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const contact = await contact.findById(id);
    if (!contact) {
        throw new Error("Contact not found");
    }

    await contact.deleteOne();
    res.send("Deleted");
})

module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact };