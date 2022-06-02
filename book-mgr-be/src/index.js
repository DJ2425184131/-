const koa=require('koa');
const context = require('koa/lib/context');

const app=new koa(); 


app.listen(3000,() =>{
    console.log('启动成功')
})
