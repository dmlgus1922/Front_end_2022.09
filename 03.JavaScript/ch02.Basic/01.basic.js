var a = 10;
a += 20;
console.log(a);

// const b = 10;
// b += 20;
// console.log(b); 상수는 값이 변할 수 없어서 에러

// 웬만하면 const로 변수 선언
// 값이 변하는 변수만 var로 선언할 것 (2015년 이전)
// let을 사용할 것
// 내가 사용할 변수는 미리 정의

const c = 10;
let b = 20;
b += a;
console.log(c, b);

let d = 10;
d = 20;
console.log(d);
console.log(Math.PI, Math.sqrt(d));

// 자료형
// 1. Number
console.log(typeof(3.1), typeof(3));

// 2. String
console.log(typeof("abc"), typeof('ㅎㅇ'));

// template literal, python fstring
let tl = `a=${a}, b=${b}`;     // back quote, tap 위
console.log(tl);

tl = tl + ' 문자열 결합';
console.log(tl);

let st = '문자열과 숫자의 결합 ' + 123;
console.log(st);
console.log(st[0], st[10]); 
console.log(st[st.length-1]);// js에는 음수 인덱싱이 없어서 이처럼 쓴다.
console.log(st[0] + st[10]);


// date 
const today = new Date(); 
// 일반적인 객체 생성은 new를 사용한다.. static method는 안 쓰는 듯
console.log(today, today.getFullYear(), today.getMonth() + 1);
// 월은 1 적게 나온다
console.log(typeof today); // object 자료형


// 3. bool
console.log(4 > 3, 4 < 3);  // true, false
console.log(4 > 3 && 10 > 8, '가방' < '나무' || false); // true, true
console.log(today.getHours() >= 9 && today.getHours() < 18);


// 4. undefined
let pi;
console.log(typeof pi);
pi = Math.PI;
console.log(typeof pi);
