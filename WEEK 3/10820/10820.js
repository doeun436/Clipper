const fs = require("fs");
const readFileSyncAdd = "10820.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().split('\n');

var ans, str, txt = [];

for(var i in input) {
    if(input[i] === '') continue;
    str = input[i].split('');
    ans = [0, 0, 0, 0];
    for(var j in str) {
        if(str[j] >= 'a' && str[j] <= 'z') ans[0]++;
        if(str[j] >= 'A' && str[j] <= 'Z') ans[1]++;
        if(str[j] >= '0' && str[j] <= '9') ans[2]++;
        if(str[j] === ' ') ans[3]++;
    }
    txt.splice(txt.length, 0, ans.join(' ').trim());
}
console.log(txt.join('\n').trim());
