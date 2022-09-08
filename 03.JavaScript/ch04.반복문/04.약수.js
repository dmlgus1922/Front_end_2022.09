// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력
let array = [1];
let num = Math.ceil(Math.random() * 100);
console.log(num);

for (let i=2; i <= num; i++) {
    if (num % i === 0) {
        array[array.length] = i;
    }
}
console.log(array);



let input = Math.ceil(Math.random() * 100);;
let divisors = [];
console.log(input);

for (let i=1; i <= input; i++) {
    if (input % i === 0) {
        divisors.push(i);
    }
}
console.log(divisors);