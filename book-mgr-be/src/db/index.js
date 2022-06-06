require('./Schemas/User');
require('./Schemas/InviteCode');

const mongoose=require('mongoose');

const connect =() =>{
    return new Promise((resolve)=>{
        // 去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017');
        // 数据库连接成功后 执行的命令
    mongoose.connection.on('open',()=>{
        console.log('连接数据库成功');
    
        resolve();
        });
    })
}; 

module.exports = {
    connect,
};

 