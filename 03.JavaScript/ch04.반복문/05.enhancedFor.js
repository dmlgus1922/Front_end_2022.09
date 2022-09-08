const array = [52, 273.1, '아침', '점심', true, false];

// for-of
for (let item of array) {
    console.log(item, typeof item);
}

// for-in, 파이썬 enumerate처럼 인덱스 뽑아줌
for (let i in array) {
    console.log(i, array[i]);
}