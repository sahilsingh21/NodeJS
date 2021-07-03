const fs = require("fs");
// //creating new file if file is not present
// fs.writeFileSync("read.txt", "welecome to the channel");

// //rewrite the file 
// fs.writeFileSync("read.txt", "Singh is King");

// fs.appendFileSync("read.txt", "How are you");



// const buf_data = fs.readFileSync("read.txt");

// //console.log(buf_data);

// org_data = buf_data.toString();

// console.log(org_data);


// rename your file name
fs.renameSync("read.txt","readWrite.txt");