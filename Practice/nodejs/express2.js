const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is Express2");
})

app.listen(3000, () => {
    console.log("익스프레스로 서버를 실행 중입니다.");
})