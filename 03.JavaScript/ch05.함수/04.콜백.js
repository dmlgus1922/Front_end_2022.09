function callFiveTimes(callback) {
    for (let i = 0; i<5; i++) {
        callback();
    }
}
// function cb() {
//     console.log('함수가 호출되었습니다.');
// }

const cb = function() {
    console.log('함수가 호출되었습니다.');
}
callFiveTimes(cb);

callFiveTimes(function() {
    console.log('함수 호출');
});

callFiveTimes(() => {
    console.log('함수 호출');
});

// callFiveTimes('사과' => {

// })