let fs = require("fs");
const readFileSyncAdd = "./1978/1978.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim();
const [len, nums] = input.split('\n');

const prime = (num) => {
    if(num === 1) return false;
    else { 
        for(let i = 2; i < num; i++) {
            if(num % i === 0) return false; 
        }
    }
    return true;
}


console.log(nums.split(' ').map(Number).filter(items => prime(items)).length)