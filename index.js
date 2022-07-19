const process = require("process");

console.log(process.argv);

const args = process.argv;
let num1 = Number(args[2]);
let num2 = Number(args[3]);

console.log(`First argument added to second argument is ${num1} + ${num2} = ${num1+num2}`);
