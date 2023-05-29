let fs = require("fs");
const readFileSyncAdd = "./WEEK 7/2108/2108.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split('\n');

const len = input.shift();
const max = Math.max(...input);
const min = Math.min(...input);

const result = [];

function count (input) {
    let array = new Array(max-min+1).fill(0);
    var max_list = [];
    var max_count = 0;

    for (v in input) array[input[v]-min] += 1;
    var max_ = Math.max(...array);

    for (v in array) if(max_ === array[v]) max_list.push(Number(v)+min);
    max_list.length >= 2 ?
    max_count = max_list.sort((a,b)=>a-b).slice(1, 2) :
    max_count = max_list;

    return max_count;
}

result[0] = Math.round(input.reduce(function sum(sum, items) {
    return sum + Number(items);
}, 0) / len);

result[1] = input.sort((a,b)=>a-b).slice(len/2, len/2 + 1);

result[2] = count(input);

result[3] = max-min;

console.log(result.join('\n'));

