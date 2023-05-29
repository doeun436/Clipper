let fs = require("fs");
const readFileSyncAdd = "./WEEK 7/10870/10870.txt";
const input = Number(fs.readFileSync(readFileSyncAdd).toString().trim());

const fibo = (input) => {
    if(input === 0) return 0;
    else if (input === 1) return 1;
    else {
        return fibo(input-2) + fibo(input-1);
    }
}

console.log(fibo(input));
