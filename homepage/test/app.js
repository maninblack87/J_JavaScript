const express = require(`express`);
const dbConnect = require(`./config/dbConnect.js`);
const methodOverride = require(`method-override`);

const app = express();

// express 앱에서 템플릿 엔진을 ejs로 설정
app.set("view engine", "ejs");
app.set("views", "./views");

dbConnect();

app.get("/", (req, res) => {
    res.render("index", {
        title: "호텔 사이트",
        session: req.session    // 세션 정보를 EJS 템플릿에 전달
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/');
        }
        res.redirect('/');
    });
});