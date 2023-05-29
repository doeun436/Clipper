let fs = require("fs");
const readFileSyncAdd = "./1935/1935.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('\n');

var alpha = 65;
var operators = ['*', '/', '-', '+'];

var len = input.shift();
var op = input.shift().toString().trim().split('');

//각 알파벳에 맞는 변수를 대입
for(alpha; alpha <= 65+len; alpha++) {
    now_alpha = input[alpha-65]
    op = op.map(v => v  === String.fromCharCode(alpha) ? v = now_alpha : v = v);
}

//연산자를 만나면 연산자 앞 변수 2개를 해당 연산자로 계산
for(let i = 0; i<op.length; i++){
    let now_value = op[i];
    if(operators.includes(now_value)) {
        const secondV = Number(op.splice(--i, 1));
        const firstV = Number(op.splice(--i,1));
        switch(now_value) {
            case '*' :
                now_value = firstV * secondV;
                break;
            case '+' :
                now_value = firstV + secondV;
                break;
            case '-' :
                now_value = firstV - secondV;
                break;
            case '/' :
                now_value = firstV / secondV;
                break;
        }
        op[i] = now_value;
    }
}

//결과를 소수점 2번째 자리까지 출력
console.log(Number(op).toFixed(2));