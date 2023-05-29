let fs = require("fs");
const readFileSyncAdd = "./9012/9012.txt";
var input = fs.readFileSync(readFileSyncAdd).toString().trim().split('\n');

const len = input.shift();

for(let i = 0; i<len; i++){
    var items = input[i].toString().trim().split('');
    for(let j = 0; j<items.length; j++) {
        if (items[j] === '(') {
            for(let k = j+1; k<items.length; k++){
                if (items[k] === ')') {
                    items.splice(k, 1);
                    items.splice(j--, 1);
                    break;
                }}
        } else break; 
    }
    items.length!=0 ? input[i] = 'NO' : input[i] = 'YES';
}
console.log(input.join('\n'));
