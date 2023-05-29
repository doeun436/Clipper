const fs = require("fs");
const readFileSyncAdd = "11655.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('');

var ans = '';

for(var i in input) {
    var str = input[i].charCodeAt();
    if (str>=65 && str <=90) {
        var up = str + 13;
        up > 90 ? ans += String.fromCharCode(up-26) : ans += String.fromCharCode(up)
    }
    else if(str >= 97 && str <= 122) {
        var low = str + 13;
        low > 122 ? ans += String.fromCharCode(low-26) : ans += String.fromCharCode(low) 
    }
    else if(str === 32) ans += ' ';
    else ans += input[i];
}
console.log(ans);