const http = require("http");

const server = http.createServer((req, res)=>{
    res.end("Hello Mr. ");
});

server.listen(8000, "localhost",()=>{
    console.log("we are listening to port number 8000");
})