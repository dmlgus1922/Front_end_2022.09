let today = new Date();
console.log(today.toDateString()); // 날짜, 요일
console.log(today.toLocaleString()); // Timezone 반영한 현재 시간

// console.log(today.getHours(), today.getMinutes(), today.getSeconds());

// 22-09-14 09:16:45
function myLocalTimeFormat(date) {
    // year = date.getFullYear() % 100; // 2022 Number
    // result = `${year<10 ? '0' + year : String(year)}`;
    let year = String(date.getFullYear()).substring(2);
    // let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : String(date.getMonth() + 1);
    let month = String(date.getMonth() + 1);
    month = month.length == 1 ? '0' + month : month;
    let day = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
console.log(myLocalTimeFormat(today));
console.log('------------------------------');
// Unix time ms 단위? 
const unixDate = new Date(1.6632e12); //1,663,200,000,000 -> 22-09-25
console.log(unixDate.toLocaleString());
console.log('------------------------------');
// 문자열로 생성
const strDate = new Date('2022-09-14'); // 09:50:30 처럼 시간도 넣을 수 있음
console.log(strDate.getHours());
console.log(myLocalTimeFormat(strDate));
console.log('------------------------------');
// 시간 요소로 생성
const elementDate = new Date(2022, 9, 14, 9, 50);
console.log(myLocalTimeFormat(elementDate));
console.log('------------------------------');
// 시간 더하고 빼기
today.setDate(today.getDate() + 100); // 오늘 + 100일
console.log(myLocalTimeFormat(today));
console.log(today.getDate());
console.log('------------------------------');

// 시간 간격
const examDay = new Date('2022-11-17');
today = new Date('2022-09-14');
const diff = examDay.getTime() - today.getTime();  
// console.log(examDay.getTime());
// 수능일과 오늘 사이의 시간차(unix time, ms 단위)
const dDay = diff / (24 * 60 * 60 * 1000);
console.log(`오늘은 수능일 D-${dDay} 입니다.`);

