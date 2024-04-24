// steps are involve in npm
// step :1 npm init (intialization)
// step2:npmjs.com
// step:3 install (npm i chalk,npm i validator)

//search (chalk,validation,nodemon(for exit ctrl+c 2 time))cd


//const chalk = require("chalk");
// import chalk from 'chalk';

//console.log(chalk.blue('Hello world!'));
//console.log(chalk.blue.underline.inverse("manoj kumar"));

// console.log(chalk.red.underline.inverse("false"));
// console.log(chalk.green.underline.inverse("success"));


// validation and chal
const chalk = require("chalk");
const validator=  require("validator");
const res= validator.isEmail("krmanoj72099@gmail.com");
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));
