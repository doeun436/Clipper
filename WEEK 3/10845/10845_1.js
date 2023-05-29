const fs = require("fs");
const readFileSyncAdd = "10845.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('\n');
const len = input.shift();

const stack = [];
const ans = [];

for (let i = 0; i < len; i++) {   
    const cmd = input[i].split(' ')[0].trim(); 
    switch(cmd) {
        case 'push': 
            const pushItem = input[i].split(' ')[1]
            stack.splice(stack.length, 0, pushItem);
            break;

        case 'pop': 
            stack.length == 0 ? ans.splice(ans.length,0, -1) : ans.splice(ans.length, 0, stack.splice(0, 1).join(''))
            break;

        case 'size': 
            ans.splice(ans.length, 0, stack.length);
            break;

        case 'empty': 
            stack.length == 0 ? ans.splice(ans.length, 0, 1) : ans.splice(ans.length, 0, 0)
            break;

        case 'front':
            stack.length == 0 ? ans.splice(ans.length, 0, -1) : ans.splice(ans.length, 0 , stack.slice(0, 1).join(''))
            break; 

        case 'back': 
            stack.length == 0 ? ans.splice(ans.length, 0, -1) : ans.splice(ans.length, 0 , stack.slice(-1).join(''))
            break; 
    }
} 
console.log(ans.join('\n'));
