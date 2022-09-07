// 복합 대입 연산자
let a = 10;
a += 10; // a = a + 10;
console.log(a);

let hello = 'Hello';
hello += 'world';
console.log(hello);

// 증감 연산자
let b = 1;
console.log(a++, ++b); // ++가 뒤에 있으면 참조를 먼저 하고 더하기
// ++가 앞에 있으면 먼저 더하고 참조하기
// post increment, pre increment
// --도 마찬가지
console.log(a, b);

console.log(typeof null); // null은 object

// 자료형 변환
console.log(Number('101'), String(101), Number(true), Number(false));
console.log(Boolean(0), Boolean(1), Boolean(''), Boolean(undefined)); // f t f f
console.log(Boolean(0.0), Boolean(2), Boolean('str'), Boolean(null)); // f t t f

console.log(Number('string'));  // not a number
console.log(Number('0o123'), Number('0x123'), Number('0b101'));

// 자동 자료형 변환
console.log(52 + '37', 21+31+'37');
console.log(1+true, true+'bool', true+false);

// 일치 연산자
console.log(1 == 1.0);
console.log(1 === 1.0); // 자료형까지 같은지 파악 둘다 number라 true
console.log(1 == '1'); // 강제 자료형 변환으로 true라고 나옴
console.log(1 === '1'); // false
console.log(1 !== '1'); // true
