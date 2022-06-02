const mongoose=require('mongoose');

// 给哪个数据库 哪个集合 添加啥字样式的文档
const UserSchema = new mongoose.Schema({
    nickname:String,
    password: String,
    age: Number,
});

const UserModal=mongoose.model('User',UserSchema);

const connect =() =>{
    // 去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017');
    // 数据库连接成功后 执行的命令
    mongoose.connection.on('open',()=>{
        console.log('连接成功');  
  
    // 创建文档
    const user= new UserModal({
        nickname: '小红',
        password:"123456",
        age:12, 
    });

    user.age=100;
    
    // 保存 同步到Mongodb 
    user.save();
});
}; 

connect();