// 0. 익스프레스를 불러오고, 실행한다.
const express = require("express");
const app = express();

// 1. 서버를 생성한다.
// 요청 방식(get)과 경로("/")를 지정하고
// 어떤 걸 실행할지는 콜백함수 형태로 제공하면 된다
app.get("/", (req, res) => {
    res.send('Hello Node!');
})

// 2. 서버를 실행한다.
app.listen(3000, () => {
    console.log('서버 실행 중');
})