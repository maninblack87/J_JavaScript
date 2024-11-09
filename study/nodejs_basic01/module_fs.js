// fs 모듈
const fs = require("fs");

// fs 모듈의 readdir 함수
fs.readdir("./", (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log(files);
})

console.log();

// fs 모듈의 readFile 함수
fs.readFile("./module1_user.js", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})

// fs 모듈의 readFile한 파일을 writeFile로 test.txt파일에 작성
fs.readFile("./module1_user.js", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile("./test.js", data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("test.js is saved with module1_user.js.");
    })
})