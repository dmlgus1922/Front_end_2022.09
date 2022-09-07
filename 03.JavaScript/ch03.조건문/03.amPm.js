// 오전인지 오후인지 

const currentTime = new Date();

if (currentTime.getHours() < 12) {
    console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`);
} else {
    console.log(`${currentTime.toUTCString()}은/는 오후입니다.\n`);
}

if (currentTime.getHours() < 12)
    console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`);
else
    console.log(`${currentTime.toUTCString()}은/는 오후입니다.\n`);
// if나 else 뒤에 문장이 하나만 오면 {} 없어도 되지만 여러개라면 무조건 {}


// 조건 연산자. 삼항 연산자
const amPm = currentTime.getHours() < 12 ? '오전' : '오후';
console.log(`${currentTime.toUTCString()}은/는 ${amPm}입니다.\n`)

// 파이썬 a = 값1 if 조건 else 값2
// ==> js a = 조건 ? 값1 : 값2