const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.get("/first", (req, res) => {
    res.send("First Page!");
});

app.listen(3000, () => {
    console.log("서버 실행 중");
})