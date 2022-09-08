// perfect number
// 10000 이하의 완전수를 구하세요
// 자기 자신을 제외한 약수의 합이 자기 자신인 수

for (let i=2; i<=10000; i++) {
    let divisors = [];
    for (let k=1; k<i; k++) {
        if (i % k == 0) {
            divisors.push(k);
        }
    }
    let sum = 0;
    for (let item of divisors) {
        sum += item;
    }
    if (sum === i) {
        console.log(i);
        console.log(divisors);
    }
}