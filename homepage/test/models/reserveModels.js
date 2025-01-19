const mongoose = require("mongoose");

const reserveSchema = new mongoose.Schema(
    {
        reserve_id: {
            type: String,
            required: true
        },
        guest: {
            type: String,
            required: true
        },
        check_in: {
            type: Date,
            required: true
        },
        check_out: {
            type: Date,
            required: true
        },
        is_payment: {
            type: Boolean,
            default: false,     // 기본값 설정
            required: true
        }
    }
)

const Reserve = mongoose.model("Reserve", reserveSchema);
module.exports = Reserve;