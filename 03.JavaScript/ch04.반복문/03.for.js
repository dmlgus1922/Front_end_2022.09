// 1에서 100까지 더하기
let sum = 0;
for(let i=1; i<=100; i++) {
    sum += i;
}
console.log(`1에서 100까지 정수의 합: ${sum}`);

// 홀수의 합
sum = 0;
for (let i=1; i<=100; i+=2) {
    sum += i;
}
console.log(`1에서 100까지 홀수의 합: ${sum}`);


// 짝수의 합
sum = 0;
for (let i=2; i<=100; i+=2) {
    sum += i;
}
console.log(`1에서 100까지 짝수의 합: ${sum}`);


// 10!
let fac = 1;
for (let i=1; i <= 10; i++) {
    fac *= i
}
console.log(`10!의 값: ${fac}`);

