let fs = require("fs");
const readFileSyncAdd = "./2743/2743.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split('');

console.log(input.length)