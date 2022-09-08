// js는 비동기적으로 실행해서 한꺼번에 실행된다.
// TimeOut 설정
setTimeout(function() {
    console.log('Timeout 발생(3초 후)');
}, 3000); // ms 단위. 3초 후

// 시간 간격(interval) - 주기적으로 실행
const si = setInterval(() => {
    console.log(new Date());
}, 1000); //ms 단위

// 주기적으로 실행되는 것을 멈춤
setTimeout(() => {
    clearInterval(si);
}, 5000);