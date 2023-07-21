let fs = require("fs");
//let n = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = fs.readFileSync("./2089/2089.txt").toString().trim().split("\n");

let result = "";
if (n === 0) result += 0;
while (n != 0) {
  result += Math.abs(n % -2);
  //console.log(result, n);
  n = Math.ceil(n / -2);
  //console.log(n);
}
if (result) console.log(result.split("").reverse().join(""));
else console.log(0);