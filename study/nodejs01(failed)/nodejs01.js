// 1. 필요한 모듈 불러오기
import express from 'express'; // Express 모듈 불러오기
import mysql from 'mysql'; // MySQL 모듈 불러오기
import path from 'path'; // 경로 모듈 불러오기
import { fileURLToPath } from 'url'; // ES6 모듈에서 __dirname 사용을 위한 가져오기

// __dirname 대체하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // Express 애플리케이션 생성
const PORT = 3000; // 포트 설정

// 2. MySQL 데이터베이스 연결 설정
// 대상 : 로컬 호스트에서 hotel 데이터베이스
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hotel'
});

// 3. 데이터베이스 연결
connection.connect((err) => { // 여기서 err는 Error 객체이다. 고유하며 별도 설정이 필요없다는 얘기.
    if (err) {
        console.error("데이터베이스 연결 에러: " + err.stack);
        return;
    }
    console.log("데이터베이스 연결 성공: " + connection.threadId);
});

// 4. HTML 파일 서빙
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // index.html 파일 경로
});

// 5. 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});