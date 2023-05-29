let fs = require("fs");
const readFileSyncAdd = "./1157/1157.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().toUpperCase();
const words = input.split('').map(v=>{
    let temp = v.charCodeAt(0);
    if (temp >= 65 && temp <= 91) return String.fromCharCode(temp);
});

let count = 0;
let res = 0;

for(let i = 65; i <= 90; i++){
    let now_count = 0;
    let now_alpa = String.fromCharCode(i);
    for(let j = 0; j < words.length; j++){
        if (words[j] == now_alpa) {
            now_count++;
        }
    }
    if (now_count > count) {
        res = i;
        count = now_count;
    }
    else if (now_count == count) {
        res = 63;
    }
}

console.log(String.fromCharCode(res));