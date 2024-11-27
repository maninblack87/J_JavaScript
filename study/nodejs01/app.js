const express = require(`express`);
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello Express!`);
})

// 라우트 미들웨어 등록
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require(`./routes/route_midware`));

app.listen(3000, () => {
    console.log("nodejs01에서 서버 실행중..");
})