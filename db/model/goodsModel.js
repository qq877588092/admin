//商品相关数据模型
const mongoose = require('mongoose');
//商品类型概要
let goodsSchema = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    shopName: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    }
})
//创建表
let goodsModel = mongoose.model('goods', goodsSchema);
//抛出
module.exports = goodsModel;