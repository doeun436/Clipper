let fs = require('fs');
//let inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(v=>Number(v));
let inputs = fs.readFileSync('./9095/9095.txt').toString().split('\n').map(v=>Number(v));

let cases = inputs[0];
let arr = [0, 1, 2, 4];
for(let i=1; i<=cases; i++){
    let num = inputs[i];
    for(let j=4; j<=num; j++){
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3];
    }
    console.log(arr[num]);
}