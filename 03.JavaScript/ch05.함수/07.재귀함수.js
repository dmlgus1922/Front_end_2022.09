// 재귀함수(recursion)
const num = 5;
let product = 1;
for (let i=1; i<=num; i++) {
    product *= i;
}
console.log(`${num}!은 ${product}입니다.`);

// 재귀함수 - 자기가 자기 자신을 호출하는 함수
function fac(n) {
    if (n==0)
        return 1;
    return n * fac(n-1);
}
console.log(`10!은 ${fac(10)}입니다.`);


// 피보나치 수열 fibonacci
function fibo(n) {
    if (n==0 || n==1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}
for (let i=0; i<=10; i++) {
    console.log(fibo(i));    
}
