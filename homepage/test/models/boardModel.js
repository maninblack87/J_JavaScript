const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
        // 이러면 createdAt과 updatedAt으로 게시일과 수정일을 확인할 수 있게 된다
    }
)