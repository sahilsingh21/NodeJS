const http = require("http");
const fs = require("fs");
// creating server and store it to server variable
const server = http.createServer((req, res)=>{

    // getting url from req.url
    // console.log(req.url); 
    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8")

    const objData = JSON.parse(data);

    //localhost home page
    if(req.url == "/"){
        res.end(" This is Home Page ");
    }else if(req.url == "/userapi"){   // User API page

    res.end(objData[3].name);

    }else if(req.url == "/about"){   // about page
        res.end("This is about page");
    } else{ // any page 
        res.writeHead(404, {"content-type": "text/html"}); // Adding status code 404 if page is not found
        res.end("<h1>404 ERROR PAGE<h1>");
    }
});

// server listining to port number 8000
server.listen(8000, "localhost",()=>{
    console.log("we are listening to port number 8000");
})