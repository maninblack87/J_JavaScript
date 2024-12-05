const asyncHandler = require("express-async-handler");

// Get all contacts
// Get /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).send("Contacts Page");
})

// Create Contact
// Post /contacts
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.send("필수 값이 입력되지 않았습니다.");
    }
    res.status(200).send("Create Contact");
});

// Get contact
// Get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// Update contact
// PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// Delete contact
// DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
})

module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact };