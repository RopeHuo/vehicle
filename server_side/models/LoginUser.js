var mongoose = require("mongoose");
module.exports = mongoose.model("LoginUser", {
    "id": Number,
    "username": String,
    "password": String,
    "nickname": String,
    "type": String
})