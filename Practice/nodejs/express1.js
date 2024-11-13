const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is Express1");
})

app.listen(3000, () => {
    console.log("서버는 실행 중~");
})