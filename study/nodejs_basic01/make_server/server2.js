// HTTP 모듈로 서버만들고 실행하기

const http = require("http");

// server2.js에서는 응답을 처리하는 예제
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");    // Content-type은 text/plain으로 설정
    res.write("Hello Node");                        // 해당 웹 브라우저(http://localhost:3000)에서 응답
    res.end();                                      // 응답을 종료
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
})