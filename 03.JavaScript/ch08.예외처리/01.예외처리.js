// error.error.error();    // Reference error 발생

try {
    error.error.error();  // 일부러 error라는 변수를 만들지도 않고 불러봄
} catch(e) {
    console.log(e.name);  // 에러의 이름
    console.log(e.message);  // 에러 메세지
}

console.log('--------------------------------');

function callThreeTimes(callback) {
    if (typeof callback == 'function'){
        for (let i=0; i<3; i++) {
            callback();
        } 
    } else {
        console.log('callback 함수를 정의하세요')
    }
}

function myFunc(){
    console.log('호출이 되었음');
}

callThreeTimes(myFunc);
callThreeTimes();   // undefined가 들어감. error 발생
console.log('프로그램 정상 종료');