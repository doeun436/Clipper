let fs = require("fs");
const readFileSyncAdd = "./WEEK 7/1463/1463.txt";
const input = fs.readFileSync(readFileSyncAdd).toString().trim();

let n = Number(input);

//dp[i] = 횟수, i = 숫자
let dp = new Array(n + 1).fill(0);

//2부터 입력받은 숫자까지 반복하며 최소한의 횟수를 찾는다.

//현재 수에서 1을 빼면, 바로 전에 계산한 수가 나온다.
//즉, 현재 수의 횟수 = 바로 전에 계산한 수 + 1
//3 또는 2로 나누어 떨어진다면, 3 또는 2로 나눈 몫의 횟수 + 1
//위 두가지 값을 비교하여 더 작은 값이 현재 수의 횟수가 될 것이다.

//3으로 예를 들어보겠다. dp[2] = dp[2-1]+1 즉, dp[2] = 1. 
//2로 나누어떨어지므로 dp[2] = Math.min(dp[2/2]+1, dp[2]) 즉, dp[2] = 1.
//2를 1로 만드는 최소한의 횟수는 1이라는 뜻이 된다.
//dp[3] = dp [3-1] + 1 즉, dp[3] = 2
//3으로 나누어떨어지므로 dp[3] = Math.min(dp[3/3] + 1, dp[3]) 즉, dp[3] = 1.

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}
console.log(dp[n]);