// 将数据库操作集成
const goodsModel = require('../db/model/goodsModel'); //获取数据库模型对象

//添加商品
let insertGoods = async (obj) => {
    //插入数据库语句
    let sql = await goodsModel.insertMany(obj);
    return sql;
}

// 查询全部商品
let findGoods = async () => {
    let result = await goodsModel.find()
    return result
}

// 删除商品 
let delGoods = async (_id) => {
    // _id 就是要删除的商品主键id
    let result = await goodsModel.deleteOne({
        _id
    })
    return result
}

// 修改数据
let updateGoods = async (_id, updateInfo) => {
    // _id 要修改的主键id  updateInfo 修改的目标数据
    let result = await goodsModel.updateOne({
        _id
    }, updateInfo)
    return result
}

// 分页查询
let findGoodsByPage = async (page, pageSize) => {
    let allGoods = await goodsModel.find()
    // 总数据条数
    let allCount = allGoods.length
    // 每一页的数据
    let result = await goodsModel.find().skip((Number(page) - 1) * pageSize).limit(Number(pageSize))
    return {
        result,
        allCount
    }
}

//  分类查询
let findGoodsByType = async (GoodsType) => {
    let result = await goodsModel.find({
        GoodsType
    })
    return result
}

// 关键字查询
let findGoodsByKw = async (kw) => {
    // 通过正则表达式匹配关键字
    let regex = new RegExp(kw)
    let result = await goodsModel.find({
        $or: [{
            desc: {
                $regex: regex
            }
        }, {
            name: {
                $regex: regex
            }
        }]
    })
    return result
}

//抛出函数
module.exports = {
    findGoodsByKw,
    findGoodsByType,
    findGoodsByPage,
    insertGoods,
    findGoods,
    delGoods,
    updateGoods
}