let fs = require("fs");
const readFileSyncAdd = "./10866/10866.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim().split('\n');

const len = input.shift();
var deque = [];
var answer = [];

for(let i = 0; i<len; i++) {
    var command = input[i].toString().trim().split(' ');
    switch(command[0]) {
        case 'push_front' :
            deque.splice(0, 0, command[1]);
            break;
        case 'push_back' :
            deque.push(command[1]);
            break;
        case 'pop_front' :
            deque.length ? answer.push(deque.splice(0, 1).join()) : answer.push(-1)
            break;
        case 'pop_back' :
            deque.length ? answer.push(deque.pop()) : answer.push(-1)
            break;
        case 'size' :
            answer.push(deque.length);
            break;
        case 'empty' :
            deque.length ? answer.push(0) : answer.push(1)
            break;
        case 'front' :
            deque.length ? answer.push(deque.slice(0, 1).join()) : answer.push(-1)
            break;
        case 'back' :
            deque.length ? answer.push(deque.slice(deque.length-1).join()) : answer.push(-1)
            break;
    }
}
console.log(answer.join('\n'))
