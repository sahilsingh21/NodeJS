//In asyncronase always use callback otherwise it throughs error

const fs = require("fs");

// we creating the file in asyncronase way that's why we need callback
fs.writeFile("read.txt","Hello Ji", (err)=>{
    console.log("Your task is complteted");
    console.log(err);
})

// append data in async and callback
fs.appendFile("read.txt"," How are you ?", (err)=>{
    console.log("You have appended the data");
    console.log(err);
})

// read data in async with callback, but in call back two argument will pass first is eroor and second to stode data 
fs.readFile("read.txt","utf-8",(err, data)=>{
    console.log(data);
    console.log(err);
})