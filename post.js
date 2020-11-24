//导入模块
const http = require("http")
const querystring = require("querystring")
//创建实例
const server = http.createServer();
//监听
server.on("request",(req,res)=>{
    let arr = [];
    req.on("data",buffer=>{
        arr.push(buffer);
    })
    req.on("end",()=>{
        let str = Buffer.concat(arr);
        let end = querystring.parse(str.toString());
        console.log(end);
    })
})
//启动
server.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})
