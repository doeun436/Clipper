const fs = require('fs');
const input = fs.readFileSync("./1149/1149.txt").toString().trim().split('\n');

const [n, ...n_arr] = input.slice();
const m = n_arr.map((el) => el.trim().split(/\s/).map(Number));

let answer = 0;
const house = Array.from(Array(Number(n)), () => Array(3).fill(0));

// 0번째 초기화
house[0][0] = m[0][0];
house[0][1] = m[0][1];
house[0][2] = m[0][2];

for (let i = 1; i < Number(n); i++) {
  // 모든 집이 다른 색을 가져야한다.
  // 즉, i가 가진 색상을 제외한 색상 중 i-1에서 최소값을 구한다.
  house[i][0] = Math.min(house[i - 1][1], house[i - 1][2]) + m[i][0];
  house[i][1] = Math.min(house[i - 1][0], house[i - 1][2]) + m[i][1];
  house[i][2] = Math.min(house[i - 1][0], house[i - 1][1]) + m[i][2];
}

// 위 값중 최소값을 찾는다.
answer = Math.min(...house[Number(n - 1)]); //

console.log(answer);