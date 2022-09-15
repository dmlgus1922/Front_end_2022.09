/* random number로 10보다 크고 100보다 작은 두개의 정수가 주어집니다.
두 숫자의 공약수를 세트 형태로 구하도록 프로그램을 작성하세요. */


// 세트 사용(has 메소드)
const num1 = Math.ceil(Math.random() * 89 + 10);
const num2 = Math.ceil(Math.random() * 89 + 10);
const num1Set = new Set(), num2Set = new Set();

for (let i=1; i<=num1; i++) {
    if (num1 % i == 0)
        num1Set.add(i);
}
for (let i=1; i<=num2; i++) {
    if (num2 % i == 0)
        num2Set.add(i);
}

const result1 = new Set();

for (let i of num1Set) {
    if (num2Set.has(i)) {
        result1.add(i);
    }
}


console.log(`${num1}과 ${num2}의 공약수는\n`, result1);



// 배열 사용(indexOf 메소드)
const num1Arr = [], num2Arr = [];

for (let i=1; i<=num1; i++) {
    if (num1 % i == 0)
        num1Arr.push(i);
}
for (let i=1; i<=num2; i++) {
    if (num2 % i == 0)
        num2Arr.push(i);
}

const result2 = new Set();

for (let i of num1Set) {
    if (num2Arr.indexOf(i) != -1) {
        result2.add(i);
    }
}

let cd = num1Arr.filter(function(val){ // value, index 중에 val만 쓰는 것
    return num2Arr.includes(val);  // 불린이 옴. Array의 includes메서드
});
console.log(cd);
console.log(`${num1}과 ${num2}의 공약수는\n`, result2);
