const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: [99, '长度不能超过99'],
        trim: true,//去除两边空格
    },
    age: String,
    email: String,
    password: String,
    hobbies: [String]
})

const User = new mongoose.model('User', UserSchema);
module.exports = User;