const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express3 Route Midware2");
})

app.use("/contact", require("./routes/route_midware2"));

app.listen(3000, () => {
    console.log("서버 실행중2");
})