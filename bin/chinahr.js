var express = require('express');
var app = express();
var fs = require("fs");

//添加的新用户数据
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
})

/**
 * 获取用户列表
 */
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "../tsconfig.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

/**
 * 添加用户
 */
app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile( __dirname + "/" + "tsconfig.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

/**
 * 获取用户详情
 */
app.get('/getUser/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "tsconfig.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

/**
 * 删除用户
 */
app.get('/deleteUser/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "tsconfig.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + req.params.id];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(3000, function () {

    var host = "127.0.0.1"; //server.address().address
    var port = 3000; //server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})