let fs = require("fs");
const readFileSyncAdd = "./WEEK 7/10870/10870.txt";
const input = Number(fs.readFileSync(readFileSyncAdd).toString().trim());

var array = new Array(input).fill().map((v,i)=>i+1);

//for(let i=2; i++; i<10) {
  //  array[i] = array[i-1] + array[i-2];
//}

console.log(array);
