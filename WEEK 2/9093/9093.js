let fs = require("fs");
const readFileSyncAdd = "9093.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('\n');

const len = input.shift();

for (let i = 0; i < len; i++) {
    let res = "";
    const words = input[i].split('\n');
    for(let j = 0; j < words.length; j++ ) {
    const word = words[j].split(' ');
        for(let k = 0; k < word.length; k++){
            const w = word[k].split('');
            w.reverse();
            if(k!==0) {
                res += ' ' + w.join('');
            }
            else {
                res += w.join('')
            }
        }
        console.log(res)
    }
}