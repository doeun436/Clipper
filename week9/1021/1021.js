let fs = require('fs');
let input = fs.readFileSync('./1021/1021.txt').toString().trim().split('\n');

//첫번째 줄과 두번째 줄을 분리하여 받는다.
let list1 = input[0];
list1 = list1.split(' ');

let list2 = input[1];
list2 = list2.split(' ');

//1~입력받은 수까지의 숫자 배열 큐를 만든다.
let que = Array(Number(list1[0])).fill().map((v,i)=>i+1);
let num = 0;

//두번째 줄에 입력받은 수 만큼 반복한다.
for (let i = 0; i < list2.length; i++) {
    let target = Number(list2[i]);
    let index = que.indexOf(target);

    //큐의 첫번째 원소가 타겟이라면 빼낸다. (1번)
    if (target === que[0]) {
        que.shift();
    } 

    //아니라면 2번이나 3번을 실행한다.
    else {
        
        //타겟의 인덱스가 큐 전체 길이의 절반보다 작다면 왼쪽으로, 아니라면 오른쪽으로 이동한다.
        if (index < que.length / 2) {
            for (let j = 0; j < index; j++) {
                let temp = que.shift();
                que.push(temp);
                num++;
            }
        } 
        
        else {
            let len = que.length - index;
            for (let j = 0; j < len; j++) {
                let temp = que.pop();
                que.unshift(temp);

                num++;
            }
        }

        //첫번째 원소가 타겟이 되었으니 빼낸다.
        que.shift();
    }
}

//2번 (또는 3번) 을 실행한 횟수를 출력한다.
console.log(num);