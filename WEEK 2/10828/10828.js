const fs = require("fs");
const readFileSyncAdd = "10828.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('\n');

const stack = [];
let res = '';

const len = input.shift();

for (let i = 0; i < len; i++) {   
    const cmd = input[i].split(' ')[0].trim();   
    let ans = '';  

    switch(cmd) {
        case 'pop': 
            if (stack.length == 0) 
            {
                ans = -1;  
            }
            else 
            { 
                ans = stack.splice(-1); 
            }
            res += ans + ' ';
            break;

        case 'size': 
            ans = stack.length; 
            res += ans + ' ';  
            break;

        case 'empty': 
            if (stack.length == 0)
            {
                ans = 1;
            }
            else 
            {
                ans = '0';
            }
            res += ans + ' ';
            break;

        case 'top': 
            if (stack.length == 0) 
            {
                ans = -1;
            }
            else {
                ans = stack.slice(-1).join(' ');
            }
            res += ans + ' ';
            break; 

        case 'push': 
            const pushItem = input[i].split(' ')[1]
            stack.push(pushItem);
            break;
    }
} 
console.log(res.split(' ').join('\n'));
