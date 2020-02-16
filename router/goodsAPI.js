//接口路由集成
const express = require('express');
const Router = express.Router();

//引入操作数据库函数
const {
    findGoodsByKw,
    findGoodsByType,
    findGoodsByPage,
    insertGoods,
    findGoods,
    delGoods,
    updateGoods
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

// 查询全部食品 
Router.post('/infos', (req, res) => {
    findGoods()
        .then((data) => {
            res.send({
                list: data,
                err: 1,
                msg: '查询成功'
            })
        })
        .catch((err) => {
            res.send({
                err: 0,
                msg: '查询失败请重试'
            })
        })
})

// 2. 删除商品
Router.post('/del', (req, res) => {
    // 获取要删除数据的id
    let {
        _id
    } = req.body
    delGoods(_id)
        .then(() => {
            res.send({
                err: 1,
                msg: '删除成功'
            })
        })
        .catch((err) => {
            res.send({
                err: 0,
                msg: '删除失败请重试'
            })
        })

})

// 3. 修改商品
Router.post('/update', (req, res) => {
    // 获取修改数据的参数
    let obj = {
        _id,
        title,
        price,
        img,
        shopName,
        mark
    } = req.body
    updateGoods(_id, obj)
        .then(() => {
            res.send({
                err: 1,
                msg: '修改成功'
            })
        })
        .catch((err) => {
            res.send({
                err: 0,
                msg: '修改失败请重试'
            })
        })
})

// 分页查询
Router.post('/getInfos', (req, res) => {
    let page = req.body.page || 1 //查询的第几页数据
    let pageSize = req.body.pageSize || 2 //每页几条数据
    findGoodsByPage(page, pageSize)
        .then((data) => {
            console.log(data)
            let {
                result,
                allCount
            } = data
            res.send({
                err: 1,
                msg: '查询成功',
                list: result,
                allCount
            })
        })
        .catch((err) => {
            res.send({
                err: 0,
                msg: '查询失败请重试'
            })
        })
})

// 分类查询  
// 分类查询的数据也可能很多 需要和分页查询做关联
Router.post('/getInfosByType', (req, res) => {
    let {
        shopName
    } = req.body
    findGoodsByType(shopName)
        .then((data) => {
            console.log(data);
            
            res.send({
                err: 1,
                msg: '查询成功',
                list: data
            })
        })
        .catch((err) => {
            res.send({
                err: 0,
                msg: '查询失败请重试'
            })
        })

})

// 模糊查询 关键字查询
// 也要和分页做关联
Router.post('/getInfosByKw', (req, res) => {
    let {
        kw
    } = req.body || ''//kw关键字,没有给定就是空字符串
    findGoodsByKw(kw)
        .then((data) => {
            res.send({
                err: 1,
                msg: '查询成功',
                list: data
            })
        })
        .catch((err) => {
            res.send({
                err: 0,
                msg: '查询失败请重试'
            })
        })
})

//抛出接口
module.exports = Router;