let fs = require("fs");
const { join } = require("path");
const readFileSyncAdd = "./1158/1158.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split(' ');

var array = new Array(Number(input[0])).fill().map((v,i)=>i+1);
var answer = [];
var count = 0;

while(array.length !== 0) {
    count++;
    if(count===Number(input[1])) {
        answer.push(array.splice(0,1).join(''));
        count = 0;
    } else {
        array.push(array.shift());
    }
    //console.log(answer, array)
}

console.log('<'+answer.join(', ')+'>')