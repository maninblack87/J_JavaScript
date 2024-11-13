// 라우팅

const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-type", "text/plain");

    // 1. url과 method를 요청한다.
    // req.url : 요청 경로
    // req.method : 요청 방식
    const { url, method } = req;
    // 아래 두 줄의 코드를 한 줄로 작성
    // const url = req.url;
    // const method = req.method;

    // 2. 조건문으로 요청한 url과 method에 따라 다르게 응답한다.
    if (method === "GET" && url === "/home") {
        res.write("HOME");
        res.end();
    } else if (method === "GET" && url === "/about") {
        res.write("ABOUT");
        res.end();
    } else {
        res.write("Not Found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
});