// 0. 시작
console.log();



// tip. 템플릿 리터럴 사용 - >>>>> 백틱(`) <<<<<
let num1 = 10;
let num2 = 20;
console.log(`${num1}과 ${num2}의 합은 ${num1 + num2}입니다.`);



// 1. 함수 생성과 호출
// 함수 생성
function greeting(name) {
    console.log(`${name}님 안녕하세요\n`);
}
// 함수 호출
greeting(`전석환`);



// 2. 함수 선언과 호출을 동시에
(function (a, b) {
    // 두 수의 비교
    if (a == b) {
        console.log(`두 수는 같다(${a})\n`);
    } else if (a > b) {
        console.log(`a값 ${a}가 b값 ${b}보다 크다\n`);
    } else if (a < b) {
        console.log(`b값 ${b}가 a값 ${a}보다 크다\n`);
    } else {
        console.log(`알 수 없는 결과\n`);
    }
}(100, 200))



// 3. 함수 표현식
let hi1 = function () {
    return `안녕하세요~`;
}
let hi2 = function () {
    return `안녕하세요?`;
}
console.log(`hi1 : ${hi1()}\nhi2 : ${hi2()}\n`);  // *주의사항: hi1->(X) hi1()->(O)



// 4. 화살표 함수
let hi3 = () => `안녕하세요`;
let hi4 = () => { return `안녕하세요` };
console.log(`hi3와 hi4는 같다. hi4는 hi3의 생략형이다\nhi3() = ${hi3()}\nhi4() = ${hi4()}\n`);



// 4-1. 화살표 함수 테스트
let sum1 = (a, b) => {
    return `${a} + ${b} = ${a + b}`;
}
let sum2 = (a, b) => a + b;
console.log(sum1(5, 15));
console.log(sum2(5, 15));