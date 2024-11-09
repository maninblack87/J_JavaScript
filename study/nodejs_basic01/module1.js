// 0. 모듈화
// Node.js에서는 기본으로 CommonJS 모듈 시스템을 사용한다
// 그리고 ECMAScript 모듈 시스템(ES모듈)도 사용 가능하다



// 1. CommonJS모듈
// 모듈 불러오기
const { user1, user2 } = require('./module1_user.js');
const hello = require('./module1_hello.js');
// (불러온 모듈로) 함수 실행
hello(user1);
hello(user2);



// 2. 노드 코어(Core) 모듈
// 현재 모듈의 위치(폴더 및 파일)
console.log(`현재 모듈의 폴더 위치: ${__dirname}`);
console.log(`현재 모듈의 파일 위치: ${__filename}`);