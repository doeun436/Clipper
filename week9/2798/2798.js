let fs = require('fs');
let input = fs.readFileSync("./2798/2798.txt").toString().split("\n");

//첫번째 줄과 두번째 줄을 분리하여 받는다.
let list1 = input[0];
list1 = list1.split(' ');

let list2 = input[1];
list2 = list2.split(' ');

const len = Number(list1[0]); 
const num = Number(list1[1]); 

let answer = 0;

for(let i = 0; i < len; i++){
   for(let j = i+1; j < len; j++){
      for(let k = j+1; k < len; k++){
         const sum = Number(list2[i]) + Number(list2[j]) + Number(list2[k]);
         const gap = num - sum;
         if(gap >= 0 && answer <= sum){
            answer = sum;
         }
      }
   }
}

console.log(answer);