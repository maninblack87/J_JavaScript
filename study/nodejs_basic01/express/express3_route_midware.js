const express = require(`express`);
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello Express3~!`);
});

// 바디파서 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require(`./routes/route_midware`));

app.listen(3000, () => {
    console.log("서버 실행중~!");
});