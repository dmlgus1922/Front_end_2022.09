let number = 273.1;
let num = Number('273.1');
console.log(num === number);    // 두 가지 방법이 동일하다.

// 기본(primitive) 자료형 - 숫자, 문자열, 불린

// 객체 자료형
let obj = new Number(273.1);
console.log(typeof number, typeof obj, typeof num); // number object number

let pi = Math.PI;
console.log(pi);

console.log(pi.toExponential(), pi.toFixed(2), pi.toPrecision(6)); 
// 지수 형태, 소수점 이하 자리수 설정, 숫자의 개수 설정
// Math.PI도 number 자료형이니까 그에 맞는 메소드 사용 가능

let a = 1;
console.log(a.toExponential(),a.toFixed(2), a.toPrecision(5));
let b = -1.31532;
console.log(b.toExponential(), b.toFixed(2), b.toPrecision(5));

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
// 최대 숫자와 최소 숫자. 

console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // 2**53-1, -2**53
console.log(Math.pow(2, 53) -1); 