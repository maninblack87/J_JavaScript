// mysql 모듈 불러오기
const mysql = require(mysql);

// mysql 데이터베이스 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hotel'
});

// 데이터베이스 연결
// 콜백 함수로 수행 후 결과를 호출한다
connection.connect((err) => {
    if (err) {
        console.error('데이터베이스 연결 실패: ' + err.stack);
        return;
    }
    console.log('데이터베이스 연결 됨: ' + connection.threadId);
});

// 사용자 추가 함수
const addUser = (uid, upw) => {
    const insertQuery = 'INSERT INTO user (uid, upw) VALUES (?, ?)';    // 여기서 uid와 upw는 MySQL에서 hotel 데이터베이스에서 user 테이블에서 컬럼을 가리킨다
    connection.query(insertQuery, [uid, upw], (err, result) => {        // connection.query()함수 - SQL문, 해당 SQL문 자리 표시자 ?에 들어갈 값, 콜백함수 순
        if (err) {
            console.err('사용자 추가 실패: ' + err.stack);
            return;
        }
        console.log('사용자 추가 성공: ', result);
    })
}

// addUser()함수 호출하기 전에 addUser()함수에 사용 될 매개변수 미리 설정
const uid = prompt("아이디를 입력해주세요: ", "문자나 숫자 45자 이내");
const upw = prompt("패스워드를 입력해주세요: ", "문자나 숫자 20자 이내");

// addUser()함수 호출
addUser(uid, upw);

// 연결 종료
connection.end();