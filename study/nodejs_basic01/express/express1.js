// 1. express를 불러오고
// express를 실행하는 .서.버. app을 만든다
const express = require("express");
const app = express();

// 2-1. http://localhost:3000/ 에 경로 생성
app.get("/", (req, res) => {
    res.send("Hello Node!");
});

// 2-2. http://localhost:3000/first 에 경로 생성
app.get("/first", (req, res) => {
    res.send("Hello Node and Welcome My First Page!")
})

app.listen(3000, () => {
    console.log("서버가 실행 중입니다");
});