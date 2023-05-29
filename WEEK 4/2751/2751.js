let fs = require("fs");
const readFileSyncAdd = "./2751/2751.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split('\n');

const len = input.shift();

console.log(input.sort((a,b)=>a-b).join('\n').trim());