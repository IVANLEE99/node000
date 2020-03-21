const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground_000', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('数据库链接成功')
}).catch(err => {
    console.error('数据库链接失败')
    console.error(err)
})