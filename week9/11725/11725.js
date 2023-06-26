let input = require('fs').readFileSync('./11725/11725.txt').toString().trim().split('\n');

const solution = (input) => {
  const n = +input.shift();
  const tree = Array.from(Array(n + 1), () => []);
  const check = new Array(n + 1).fill(0);
  for (let [from, to] of input.map((e) => e.split(" ").map(Number))) {
    tree[from].push(to);
    tree[to].push(from);
  }

  const queue = [];
  check[1] = 1;
  for (let next of tree[1]) {
    check[next] = 1;
    queue.push(next);
  }
  while (queue.length) {
    const cur = queue.shift();
    for (let next of tree[cur]) {
      if (!check[next]) {
        check[next] = cur; 
        queue.push(next);
      }
    }
  }
  // console.log(check);
  return check.slice(2).join("\n");
};

console.log(solution(input));