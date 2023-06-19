const fs = require('fs');
const readFileSyncAdd = "./10989/10989.txt";
let input = fs.readFileSync(readFileSyncAdd).toString().trim().split('\n');

let len = input.shift();

console.log(input.sort((a,b) => a-b).join('\n'));

