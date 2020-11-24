//导入模块
const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url")
//创建实例
const server = http.createServer();

//监听
server.on("request",(req,res)=>{
    let pathname = req.url;
    pathname = pathname ==="/" ? "/index.html" : pathname;
    // 获取静态地址
    let flime = path.join(__dirname,"public",pathname);
    fs.readFile(flime,(err,data)=>{
        if(err){
            res.statusCode = 500;
            res.end("服务器出错");
        }else{
            res.end(data);
        }
    })
})


//启动
server.listen(8080,err=>{
    console.log("http://127.0.0.1:8080")
})