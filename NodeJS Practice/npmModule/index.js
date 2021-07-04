const chalk = require("chalk");

const validator = require("validator");

// console.log(chalk.green.underline.inverse("True"));

// console.log(chalk.red.underline.inverse("False"));

//Checking email is valid or not (only return true or false)
const  data = validator.isEmail("Singh@gmail.com");

// print output with checking if statment
console.log(data ? chalk.green.inverse(data): chalk.red.inverse(data));