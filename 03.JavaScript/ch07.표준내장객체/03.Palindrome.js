// 팰린드롬
// 세자리 정수 두 개를 곱해서 나온 결과가 팰린드롬일 때
// 가장 큰 수와 그때의 두 정수를 찾아라.

let a = '123';
console.log(a.slice(2,0));

// 1) 문자열을 거꾸로 만드는 함수
function reverseString(str) {
    let result = '';
    for (let i=str.length-1; i>=0; i--) {
        result += str[i];
    }
    return result;
}


// 2) 주어진 문자열이 팰린드롬인지 확인하는 함수
function isPalindrome(str) {
    return reverseString(str) == str;
}

// // 3) 배열에서 가장 큰 수와 그것의 인덱스
// const array = [3,98,27,51,46];
// // 최대값을 임의로 선정, 제일 첫 번째 원소
// let maxVal = array[0];
// for (i in array) {

// }

let maxPalindrome = 0;
let maxNum1 = 0;
let maxNum2 = 0;
for (let i=100; i <= 999; i++) {
    for (let j=i; j<=999; j++) {  // 곱셉은 교환법칙이 성립하므로 j는 i부터 시작해도 된다. 시간복잡도 줄이기
        let num = i * j;
        if (isPalindrome(String(num)) && maxPalindrome < num) {
            maxPalindrome = num;
            maxNum1 = i;
            maxNum2 = j;
        }
    }
}
console.log(`${maxNum1} x ${maxNum2} = ${maxPalindrome}`);
console.log(maxPalindrome, maxNum1, maxNum2);
console.log(913*993);