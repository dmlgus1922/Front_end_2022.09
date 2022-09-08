// 함수 이름을 갖는 기본 함수
function funcname() {
    console.log('함수 이름을 갖는 함수');
}
funcname();

// 익명(Anonymous) 함수 -NodeJS에서 많이 쓰임(callback 함수)
const fn = function() {
    console.log('익명함수');
}
fn();
console.log(fn, typeof fn);

// 화살표 함수(Arrow Function)
const arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc, typeof arrowFunc);

const square2 = (x,y) => {
    return x*x + y*y;
}
console.log(square2(3,4));

// 매개변수가 하나일 때는 괄호 생략 가능
const square = x => { 
    return x*x;
}
console.log(square(5));

// 함수 안의 코드가 한 줄일 때.. return문 하나만 있으면 중괄호, return 생략 가능
// 마치 lambda 같다
const sq = x => x*x; 
console.log(sq(10));

// 짝수면 제곱수를, 홀수면 세제곱수를 반환하는 함수
const myFunc = x => x % 2 == 0 ? x*x : x*x*x;
console.log(myFunc(2), myFunc(3));