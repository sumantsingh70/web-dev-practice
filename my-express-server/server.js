const { request } = require("express");
const express = require("express");

const app = express();

app.get("/", function(request,response){
    // console.log(request);
    // response.send("Hello");
    response.send("<h1>Hello World</h1>");
});

app.get("/contact" , function(req,res){
    res.send("contact me at : singhsumant581@gmail.com");
});

app.get("/about" , function(req,res){
    res.send("My name is Sumant Singh and I am a student at Punjabi University Patiala.");
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>coffee</li><li>code</li></ul>")
})



app.listen(3000,function(){
    console.log("Server started on port 3000");
});