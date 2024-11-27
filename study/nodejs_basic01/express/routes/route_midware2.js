const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send("View All Contacts");
    })
    .post((req, res) => {
        res.send("Create Contact");
    })

router
    .route("/:id")
    .get((req, res) => {
        res.send(`View Contact for ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update Contact for ID ${res.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Update Contact for ID ${req.params.id}`);
    })

// router 내보내기
module.exports = router;