const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

//启动服务器的时候同时启动数据库
const db = require('./db/connect');

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
//json数据解析
app.use(bodyParser.json())

//开启静态资源服务器
app.use('/public', express.static(path.join(__dirname, '/public')))

//路由接入
let goodsAPI = require('./router/goodsAPI');
app.use('/admin/goods', goodsAPI)

//服务器开启
app.listen(1114, () => {
    console.log(`/**
        *　　　　　　　 ┏┓　 ┏┓+ +
        *　　　　　　　┏┛┻━━━┛┻┓ + +
        *　　　　　　　┃　　　　　　┃ 　
        *　　　　　　　┃　　　━　　 ┃ ++ + + +
        *　　　　　　 ████━████  ┃+
        *　　　　　　　┃　　　　　　　┃ +
        *　　　　　　　┃　　　┻　　　┃
        *　　　　　　　┃　　　　　　┃ + +
        *　　　　　　　┗━┓　　　┏━┛
        *　　　　　　　　 ┃　　　┃　　　　　　　　　　　
        *　　　　　　　　 ┃　　　┃ + + + +
        *　　　　　　　　 ┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
        *　　　　　　　　 ┃　　　┃ + 　　　　神兽保佑,代码无bug　　
        *　　　　　　　　 ┃　　　┃
        *　　　　　　　　 ┃　　　┃　　+　　　　　　　　　
        *　　　　　　　　 ┃　 　 ┗━━━┓ + +
        *　　　　　　　　 ┃ 　　　　   ┣┓
        *　　　　　　　　 ┃ 　　　　　 ┏┛
        *　　　　　　　　 ┗┓┓┏━┳┓┏┛ + + + +
        *　　　　　　　　  ┃┫┫ ┃┫┫
        *　　　　　　　　  ┗┻┛ ┗┻┛+ + + +
        */`);
})