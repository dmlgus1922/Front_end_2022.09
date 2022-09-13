// String 객체
let hello = '안녕하세요'; // literal로부터 생성
let helloFromConstructor = new String('안녕하세요');

//속성
console.log(hello.length);

//Methods
console.log(hello[1], hello.charAt(1));
console.log(hello.concat('여러분'));
console.log(hello.indexOf('하'), hello.indexOf('한'));


// 문제
// 디지털 시계가 있다. 00:00 ~ 23:59
// 디지털 시계에서 3이라는 숫자가 있는 시간은 하루에 총 몇 초인가?

// 내 풀이
let three = 0;
let sec = 0;
let min = 0;
let hr = 0;
while (hr <= 23) {
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        hr++;
        min = 0;
    }
    if (min.toString().indexOf('3') != -1 || hr.toString().indexOf('3') != -1){
        three ++;
    }
}
console.log(three);

// 선생님 풀이
let totalSeconds = 0;
for (let hour=0; hour<24; hour++) {
    for (let minute = 0; minute<60; minute++){
        let display = String(hour) + ':' + String(minute);
        if (display.indexOf('3') >= 0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);

// Regular Expression (정규표현식)
let sample = 'A quick brown fox 갈색의 재빠른 여우가 jump over the lazy dog.';
let newStr = sample.replace(/[A-Z]/,' '); // 대문자를 공백으로
console.log(newStr);
let newStr2 = sample.replace(/r/,'R'); // r 하나만 바꿔줌.
console.log(newStr2);
let newStr3 = sample.replace(/r/g,'R'); // global. 전부 바꾸기
console.log(newStr3);

newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);
newStr = newStr.replace(/ +/g, ' ');
console.log(newStr);

// 문자열의 일부분을 추출
let str = 'Apple, Banana, Kiwi';
console.log(str.slice(7,13)); // 시작 인덱스, 끝 인덱스(마지막 제외, 파이썬처럼)
console.log(str.slice(7));    // [7:] 처럼 인식됨.
// console.log(str.slice(,7)); 무조건 시작 인덱스를 넣어야 하나보다. [:7]처럼은 안됨.
console.log(str.substring(7,13)); // slice랑 큰 차이 없어 보임
console.log(str.substr(7,6)); // 시작 인덱스 ~ 개수만큼. 현재는 사용 가능하지만 나중에는 사라질 메소드


// 문자열을 특정 문자열을 기준으로 잘라 배열로 만들기
let fruits = str.split(', ');
console.log(fruits); // split도 파이썬과 같아 보임


// 문제
// 1에서부터 1000까지의 숫자가 있다.
// 0, 1, ..., 9가 각각 등장하는 횟수를 구하기
// let num = '1231231'
// console.log(num.split('3').length-1);

let numbers = ''
for (let i=1; i<=1000; i++) {
    numbers += String(i);
}

for (let i = 0; i<=9; i++) {
    console.log(`${i}: `,numbers.split(String(i)).length -1);
}

let obj = {};
for (let i=0; i<=9; i++) {
    obj[i] = numbers.split(String(i)).length - 1;
}
console.log(obj);
// 파이썬 딕셔너리처럼 js object도 추가가 가능하다.