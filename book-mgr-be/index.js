const Koa = require('koa');
const koaBody= require('koa-body');
const { connect } = require('./db/index.js')
const registerRoutes = require('./routers/index.js')
const cors=require('@koa/cors');


const app=new Koa(); 
 
connect().then(() => {
    app.use(cors());
    app.use(koaBody());
    registerRoutes(app);
    
    app.listen(3000,() => {
        console.log('启动成功')
    });
});