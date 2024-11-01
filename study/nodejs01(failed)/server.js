import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000; // 사용할 포트 번호

// HTML 파일 서빙
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html')); // index.html 파일 경로
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
