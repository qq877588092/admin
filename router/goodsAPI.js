//接口路由集成
const express = require('express');
const Router = express.Router();

//引入操作数据库函数
const {
    insertGoods,
} = require('../controls/goodsControls');

//添加商品
Router.post('/add', (req, res) => {
    //接收前端数据
    let obj = {
        title,
        price,
        img,
        shopName,
        mark
    } = req.body;
    // 处理数据 插入数据库
    insertGoods(obj).then(() => {
        res.send({
            err: 1,
            msg: '插入成功'
        })
    }).catch((err) => {
        res.send({
            err: 0,
            msg: '插入失败请重试'
        })
    });
})

//抛出接口
module.exports = Router;