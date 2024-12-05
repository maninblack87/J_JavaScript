const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        phone: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

// 스키마 -> 모델
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;