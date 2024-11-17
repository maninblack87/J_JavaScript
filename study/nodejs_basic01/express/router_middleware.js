const express = require("express");
const app = express();
// const router = express.Router();

app.get("/", (req, res) => {
    res.send(`Hello Node~!`);
})

app.use("/users", require("./routes/route_midware"));

app.listen(3000, () => {
    console.log(`서버가 실행 중~!`);
})