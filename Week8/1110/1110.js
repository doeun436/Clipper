let fs = require("fs");
const readFileSyncAdd = "./1110/1110.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('\n');

var num = input[0];
var N = num;
var cnt = 0;


while(true){
    // 십의 자리와 일의 자리의 합을 구한다.
    // parseInt 는 정수만, Number 는 소수점까지 구한다.
    var b = parseInt(N/10) + Number(N%10);

    // 일의 자리와 새로 구한 수의 일의 자리를 합하여 새로운 수를 만든다.
    var c = N%10 + "" + b%10;

    N = c;
    cnt++;

    // 새로운 수가 처음 수와 같다면 멈춘다.
    if(Number(c) == Number(input[0])){
        break;
    }
}


console.log(cnt);