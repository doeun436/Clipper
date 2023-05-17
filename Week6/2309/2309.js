let fs = require("fs");
const readFileSyncAdd = "./2309/2309.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split('\n').map(Number);

const sum = input.reduce((sum, arr) => {return sum+= arr});
var answer = [];

for(let i=0; i<=9; i++){
    for(let j=i+1;j<=9;j++){
        if(input[i]+input[j] === sum-100) {
            answer = input.filter(v=> v!==input[i] && v!== input[j]);
            break;
        }
    }
    if(answer.length) break;
}

console.log(answer.sort((a,b)=>a-b).join('\n'));
