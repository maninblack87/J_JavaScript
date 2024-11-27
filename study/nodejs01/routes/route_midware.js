const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send(`View All Contacts`);
    })
    .post((req, res) => {
        console.log(req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.send(`필수 값이 입력되지 않았습니다.`);
        }
        res.send(`Create Contact`);
    })

router
    .route("/:id")
    .get((req, res) => {
        res.send(`View contact for ID : ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update contact for ID : ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete contact for ID : ${req.params.id}`);
    })

// router 내보내기
module.exports = router;