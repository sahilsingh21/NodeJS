const fs = require("fs");

const http = require("http");

const server = http.createServer();

server.on("request",(req,res)=>{
    // fs.readFile("read.txt", (err, data)=>{
    //     if(err){
    //         return console.log(err);
    //     }else{
    //         return res.end(data);
    //     }
    // })

    // read streaming by fs module  
    const rstream = fs.createReadStream("read.txt");

//  to get data chunk by chunk and write to web page
    rstream.on("data", (chunk)=>{
        res.write(chunk);
    })

// when all data is read then we should end it
    rstream.on("end",()=>{
        res.end();
    })

    // if file is not present it throughs error
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("File is not thier");
    })

})

server.listen(8000, "localhost");