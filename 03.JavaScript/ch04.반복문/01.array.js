const array = [52, 273.1, '아침', '점심', true, false];
console.log(array[0], array[array.length -1]);
console.log(array.length, array[array.length-1]);
console.log(typeof array);

// element 추가 push
array[8] = 6; // 인덱싱을 하고 값을 넣어도 들어간다. 
// 근데 길이보다 큰 숫자를 넣으면 사이에 빈 공간이 생김.
array[array.length] = 6; // 따라서 이렇게 많이 씀
array.push('push');

console.log(array);
console.log(array.length);
console.log(array.toString()[0]);

// 기본 for-loop
for (let i=0; i < array.length; i++) { // 초기값, 조건, 증감
    console.log(i, array[i]);
}

// enhanced for-loop
for (let item of array) {
    console.log(item);
}