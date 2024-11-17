const express = require(`express`);
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send(`Hello Test Express and Route Middleware~!`);
    })
    .post((req, res) => {
        res.send(`Create Contact`);
    });

router
    .route("/:input")
    .get((req, res) => {
        res.send(`View Contact for ID : ${req.params.input}`);
    })
    .put((req, res) => {
        res.send(`Update Contact for ID : ${req.params.input}`);
    })
    .delete((req, res) => {
        res.send(`Delete Contact for ID : ${req.params.input}`);
    })

// router 내보내기
module.exports = router;