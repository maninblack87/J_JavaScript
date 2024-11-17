const express = require(`express`);
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello Express3~!`);
});

app.use("/contacts", require(`./routes/route_midware`));

app.listen(3000, () => {
    console.log("서버 실행중~!");
});