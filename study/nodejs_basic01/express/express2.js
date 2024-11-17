const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Node!");
})

// 연락처(contacts) 가져오기
app.get("/contacts", (req, res) => {
    res.send("Contacts Page");
})

// 연락처 1개 가져오기
app.get("/contacts/:id", (req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`);
})

// post, put, delete
// 
// 새 연락처(contacts) 추가하기
app.post("/contacts", (req, res) => {
    res.send("Create Contacts");
})

// 특정 연락처 1개 수정하기
app.put("/contacts/:id", (req, res) => {
    res.send(`Updata Contact for ID : ${req.params.id}`);
})

// 특정 연락처 1개 삭제하기
app.delete("/contacts/:id", (req, res) => {
    res.send(`Updata Contact for ID : ${req.params.id}`);
})

app.listen(3000, () => {
    console.log("서버 실행 중");
})