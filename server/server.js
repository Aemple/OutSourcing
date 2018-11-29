const express = require('express')
const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}))

// 新增数据
User.create({
    user: 'xiaohua',
    age: 12
}, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

const app = express();
app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {
        res.json(doc)
    })
})
app.listen(9093,function() {
    console.log('Node app start at port 9093')
})