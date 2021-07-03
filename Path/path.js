const  path = require("path");

//getting dir name
console.log(path.dirname("C:/Users/HP/Desktop/NodeJS/Path/path.js"));

// getting file type
console.log(path.extname("C:/Users/HP/Desktop/NodeJS/Path/path.js"));

// getting all info through object
console.log(path.parse("C:/Users/HP/Desktop/NodeJS/Path/path.js"));

// getting all object info in variable data
const data = (path.parse("C:/Users/HP/Desktop/NodeJS/Path/path.js"));

// print only name 
console.log(data.name);
