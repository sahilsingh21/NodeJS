
//its like IIFE in javaScript
(function(exports, require, module, __filename, __dirname){
    const  name = "Singh";
    console.log(name);
    
//    module.exports = {name};
})()

// it is behind the code runs. It is private all code run private in that manner  
console.log(__dirname); // give directory
console.log(__filename) // give file name