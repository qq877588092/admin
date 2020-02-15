//连接数据库 27017 默认端口号
let mongoose = require('mongoose');

//连接数据库 
mongoose.connect('mongodb://localhost:27017/admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//数据库的连接对象
let db = mongoose.connection;

//调用连接对象
db.on('error', () => {
    console.log('连接数据库失败')
}) //失败提示

//连接一次数据库
db.once('open', () => {
    console.log('数据库连接成功')
})