// HTTP 모듈로 서버만들고 실행하기

// 1. HTTP 모듈을 가져옵니다.
const http = require("http");

// 2. HTTP 서버를 생성합니다.
// server1.js에서는 요청을 처리하는 예제
// !반드시! 웹 브라우저에서 http://localhost:3000 으로 접속해야 해당 함수의 구문이 수행됩니다!!
const server = http.createServer((req, res) => {
    console.log(req);
});

// 3. 해당 서버를 실행합니다.
// // 3000번 포트에서 클라이언트 요청을 대기하도록 설정합니다.  
server.listen(3000, () => {
    console.log("서버가 실행 중");
})