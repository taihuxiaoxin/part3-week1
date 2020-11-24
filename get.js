//导入模块
const http = require("http");
const url = require("url");

//创建实例
const server = http.createServer()



// 监听
server.on("request",(req,res)=>{
    let pathname = req.url;
    let { query } = url.parse(pathname,true);
    console.log(query);
})



//启动
server.listen(8080,()=>{
    console.log("http://127.0.0.1:8080/?username=张三&pawwd=1234")
})