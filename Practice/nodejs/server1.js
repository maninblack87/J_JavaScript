const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/plain");
    res.write("Execute NodeJS");
    res.end();
})

server.listen(3000, () => {
    console.log("서버가 실행중이다");
})