// 1에서 얼마까지 더하면 1000이 넘는가
let i = 1;
let sum = 0;
// let i = 1, sum = 0;
while (true) {
    sum += i;
    if (sum > 1000) {
        break;
    }
    // if (sum > 1000)
    //     break; 코드가 한줄이라 중괄호 생략 가능
    i++;
}
console.log(i, sum);

sum = 0;
for (let j=1; j < 1000; j++) { // 변수 j는 { } 안에서만 유효함(scope rule) 파이썬의 지역변수 같은 것
    sum += j;
    if (sum > 1000)
        break;
}
// console.log(sum, j);

let j;
sum = 0;
for (j=1; j < 1000; j++) {
    sum += j;
    if (sum > 1000)
        break;
}
console.log(sum, j);

