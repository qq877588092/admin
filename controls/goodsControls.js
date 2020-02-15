// 将数据库操作集成
const goodsModel = require('../db/model/goodsModel'); //获取数据库模型对象

//添加商品
let insertGoods = async (obj) => {
    //插入数据库语句
    let sql = await goodsModel.insertMany(obj);
    return sql;
}

//抛出函数
module.exports = {
    insertGoods,
}