// Array 생성
const cars = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria');  // Array도 객체이므로 생성자 함수 사용할 수 있다.
console.log(cars, persons);

// Array 속성
console.log(cars.length, persons.length);

// 마지막 요소
console.log(cars[cars.length-1], persons[persons.length-1]);

// 배열 합치기(concat)
console.log(cars.concat(persons));
console.log(cars, persons); // 배열 자체에 영향을 주지 않음 (자기파괴적이지 않음)
console.log(cars + persons); // cars.toString() + persons.toString()
console.log([cars, persons]); // 2차원 배열

// 문자열 만들기(join)
console.log(cars.join(' | '));

// 요소 제거(pop) - 배열이 변함
let car = cars.pop();
console.log(car, cars);


// 마지막 요소 추가(push) - 배열이 변함
cars.push('Benz');
console.log(cars);

// 배열의 요소 순서를 뒤집기(reverse) - 배열이 변함
console.log(cars.reverse());
console.log(cars);
console.log('abc'.split(''));

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('기러기 스위스 토마토'));
// 화살표 함수로 만들기
let rs = str => str.split('').reverse().join('');
console.log(rs('기러기 스위스 토마토'));

// 배열의 일부분을 리턴 (slice) 파이썬 슬라이싱이랑 비슷. 끝은 포함 x
const fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1,3), fruits);
console.log(fruits.slice(2));

// 배열의 요소 정렬(sort) - 배열이 변함 
console.log(cars);   // [ 'Benz', 'Volvo', 'Saab' ]
cars.sort(); // [ 'Benz', 'Saab', 'Volvo' ] 오름차순
console.log(cars);   // [ 'Benz', 'Saab', 'Volvo' ]

// 내림차순 정렬
const numbers = [45, 67, 35, 97, 8];
// console.log(numbers.sort());
// console.log(typeof numbers[0]);
numbers.sort().reverse();
console.log(numbers);
console.log([1,2,11,22].sort());

// 배열의 일부분을 삭제해서 리턴 - 배열이 변함
const abFruits = fruits.splice(0, 2);
console.log(abFruits, fruits);

