const express = require(`express`);
const dbConnect = require(`./config/dbconnect`);

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// 정적인 파일 연결하기
app.use(express.static("./public"));

dbConnect();

app.get("/", (req, res) => {
    res.send(`Hello Express!`);
})

// 라우트 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require(`./routes/route_midware`));

app.listen(3000, () => {
    console.log("nodejs01에서 서버 실행중..");
})