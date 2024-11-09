// 비동기 처리

// 1. setTimeout(), 콜백 함수(callback)
function displayA() {
    console.log(`A`);
}
function displayB(callback) {
    setTimeout(() => {      // 1.setTimeout()함수에 의해 A->C->B 순으로 출력된다
        console.log(`B`);
        callback();         // 2.callback()함수에 의해
    }, 2000);
}
function displayC() {
    console.log(`C`);
}

// 2. 함수를 호출
displayA();
displayB(displayC);         // 3. displayB()함수에 displayC()를 >>>>_콜백함수_<<<<로 매개변수를 넣어줘야 연결이 된다!