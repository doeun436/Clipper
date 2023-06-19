let fs = require("fs");
const readFileSyncAdd = "./17413/17413.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim();

var result = "";

// <> 사이에 어떤 문자열이 있는 그룹 혹은 공백
// 정규식에 포함되는 문자도, 즉 <> 과 공백도 포함하여 split 할 수 있도록 () 로 감싸준다.
const delimiter = /(<.+?>|\s)/g;
const arr = input.split(delimiter); 

//console.log(arr);

arr.map((x) => {

// 정규식이 포함되어 있을 경우 그대로 반환
  if (delimiter.test(x)) {
    result += x; 
  } 
  
// 없을 경우 뒤집어서 반환한다.
  else { 
    var a = x.split("").reverse().join(""); 
    result += a; //
  }
});

console.log(result);