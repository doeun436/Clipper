let fs = require("fs");
const readFileSyncAdd = "./10808/10808.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split('');

const res = [];

for(let i = 97; i<=122; i++){
    res[i-97] = 0;
    for(v in input){
        input[v] === String.fromCharCode(i) ? res[i-97] += 1 : res[i-97] = res[i-97];
    }
}

console.log(res.join(' '));