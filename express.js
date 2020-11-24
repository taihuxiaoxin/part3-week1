//导入模块
const express = require("express")

//创建实例
const app = express()


//监听事件
app.get("/",(req,res)=>{
    res.send("holle world")
})
app.get("/html5",(req,res)=>{
    res.send("2003")
})
app.post("/post",(req,res)=>{
    res.send("post方式")
})



//启动服务
app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})