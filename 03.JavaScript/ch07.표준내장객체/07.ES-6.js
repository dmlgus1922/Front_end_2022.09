// ES-6(2015년)에 추가된 사항

// 1. Destructuring assignment 비구조적 assignment
const fruits = ['apple', 'banana', 'cherry'];
const [a,b,c] = fruits; // 언패킹
console.log(a,b,c);

const product = {name:'mouse', price:20000};
const {name, price} = product; // object의 키로 받을 수 있음. 근데 생겨먹은게 같아야 함
console.log(name, price);

// 2. Spread syntax
const fruits1 = ['grape','mango'];
const fruits2 = [fruits, fruits1];
console.log(fruits2);
// fruits.concat(fruits1);
const fruits3 = [...fruits, ...fruits1]; // ...하면 Array를 풀어줌..
console.log(fruits3);

const numbers = [4, 16, 9, 25, 36];
console.log(Math.max(numbers)); // 숫자가 들어와야하는데 Array가 들어와서 결과가 NaN
console.log(Math.max(...numbers)); // Array가 풀어지며 결과가 나옴
console.log(...numbers);

// 3. let, const
// 4. template literals    `    `
// 5. 삼항 연산자   조건 ? 참 : 거짓
// 6. 화살표 함수
// 7. Default parameters    함수의 인자 default 값을 설정할 수 있게 함
// 8. object shorthand property    {name:name, price:price} => {name, price}
//  object의 key값과 value값이 같으면 하나만 써도 됨
// 9. class 
// 10. Set
const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet);
console.log(mySet.has(3));  // 3이 있는지 확인. true
console.log(mySet.size);    // length 대신 size
