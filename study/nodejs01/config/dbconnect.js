const mongoose = require("mongoose");
require("dotenv").config();

// async, await
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connected");
    } catch (err) {
        console.log(err);
    }
}

// 내보내기
module.exports = dbConnect;