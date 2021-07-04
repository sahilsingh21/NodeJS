const fs = require("fs");
const bioData = {
    name : "Singh",
    age : 24,
};

// convert data to JSON
const jsonData = JSON.stringify(bioData);

// creating file to put json data
fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done");
})

// to getting json data  
fs.readFile("json1.json","utf-8", (err, data)=>{
    
    const objData = JSON.parse(data);// convert json data to orignal object data
    console.log(data);
    console.log(objData);
})


// // convert JSON to orignal data
// const objData = JSON.parse(json);

// console.log(objData);