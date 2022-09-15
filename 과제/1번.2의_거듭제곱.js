/* 1. random number로 두개의 정수가 주어집니다.(첫번째 값의 범위는 1~20, 
    두 번째 값의 범위는 10~30이며 첫 번째 값은 두 번째 값보다 4 이상 작아야 합니다). 
    첫 번째 정수부터 두 번째 정수까지를 지수로 하는 2의 거듭제곱 배열을 
    출력하는 프로그램을 만드세요. 
    단, 배열의 두 번째 요소와 뒤에서 두 번째 요소는 삭제한 뒤 출력하세요. */


function makeNumber() {
    while (true) {
        let num1 = Math.ceil(Math.random() * 20);  // 1 ~ 20
        let num2 = Math.ceil(Math.random() * 21 + 9); // 10 ~ 30
        if (num2 - num1 >= 4)
            return [num1, num2];
    }
}

const [num1, num2] = makeNumber();
console.log(`첫 번째 정수: ${num1}, 두 번째 정수: ${num2}`);

const second = num1 + 1, lastSecond = num2 - 1;

let result = [];
for (let i=num1; i<=num2; i++) {
    if (i == second || i == lastSecond){
        continue;
    }
    result.push(2**i);
}

console.log(result);