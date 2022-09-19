/* 1. 두 개의 값이 다른 정수를 매개변수로 받아 
두수 중 작은 수부터 +3씩 증가시켜서  배열로 만들어 반환하는 함수 ans1(num1, num2) 를 만드세요.  
단, 배열에는 매개변수의 큰 수 보다 더 큰 수는 포함될 수 없다. 
또한 이 함수를 검증하는 코드, 즉 ans1(2,10)과 ans1(12,3)의 결과를 출력하는 코드도 만드세요.  
ans1(2,10) => [2, 5, 8]?? [2, 5, 8, 10]??
ans1(12,3) => [3, 6, 9, 12]??
*/

function ans1(num1, num2) {
    if (num1 > num2) 
        [num1, num2] = [num2, num1];
    const result = [num1];
    while (true) {
        num1 += 3;
        if (num1 <= num2)
            result.push(num1);
        else 
            return result;
    }
}
console.log('\n1번 답:')
console.log(ans1(2,10),ans1(12,3));


/* 2. ‘991205’와 같이 년월일 6자리 문자를 매개변수로 받아 만 나이를 반환하는 함수  ans2(birthday)를 만드세요. 
또한 이 함수를 검증하는 코드, 즉 ans2(‘991003’)과 ans2(‘000919’)의 결과를 출력하는 코드도 만드세요. */
function ans2(birthday) {     
    const birthYear = parseInt(birthday.slice(0,2));
    const birthMonth = parseInt(birthday.slice(2,4));
    const birthDay = parseInt(birthday.slice(4));
    
    const date = new Date();
    const nowYear = date.getFullYear() % 100;
    const nowMonth = date.getMonth() + 1;
    const nowDay = date.getDate();

    if (birthYear > nowYear){ //1900년대생
        if (birthMonth < nowMonth || (birthMonth == nowMonth && birthDay <= nowDay))    // 생일이 지남
            return nowYear - birthYear + 100;
        else // 그 밖은 1900년대생인데 생일이 안 지났을 것
            return nowYear - birthYear + 100 - 1;
    } else { // 2000년대생(이라고 가정. 즉 1900~1922년생은 제외)
        if (birthMonth < nowMonth || (birthMonth == nowMonth && birthDay <= nowDay)) // 생일이 지남
            return nowYear - birthYear;
        else
            return nowYear - birthYear - 1;
    }
}
console.log('\n2번 답:')
console.log(ans2('991003'), ans2('000919'));

/* 3. 라인의 수(홀수)를 매개변수로 받아 다음과 같은 모양을 출력하는 함수 ans3(num)을  만드세요. 
예를 들어 ans3(5)의 결과는 다음과 같습니다. 
*****  
 ***  
  *  
 *** 
*****   
또한 이 함수를 검증하는 코드 즉, ans3(5)과 ans3(9)의 결과를 출력하세요 */
function ans3(num) {
    const half = parseInt(num/2);
    let result = '';
    for (let i = 0; i <=half; i++) {
        let blank = '';
        let stars = '';
        for (let j = 0; j < i; j++){
            blank += ' ';
        }
        for (let j = 0; j < num-2*i; j++){
            stars += '*';
        }
        result += (blank + stars + '\n');
    }
    for (let i=half-1; i >=0; i--) {
        let blank = '';
        let stars = '';
        for (let j = 0; j < i; j++){
            blank += ' ';
        }
        for (let j = 0; j < num-2*i; j++){
            stars += '*';
        }
        result += (blank + stars + '\n');
    }
    return result;
}
console.log('\n3번 답:')
console.log(ans3(5));
console.log(ans3(9));

/* 4. 매개변수로 물품 가격 여러 개가 문자열 하나로 전해지고, 각 가격은 세미콜론(;) 으로 구분되어 있습니다. 
이 가격을 배열로 만들고, 내림차순으로 정렬하여 반환하는 함수 ans4(str) 함수를 만드세요.   
또한 이 함수를 검증하는 코드로 ans4(‘51900;83000;158000;367500;250000;59200;128500;1304000’)의 결과를 출력하는 코드도 만드세요. */
function ans4(str) {
    return str.split(';').sort(function(a,b) {
        return b-a;
    });
}
console.log('\n4번 답:')
console.log(ans4('51900;83000;158000;367500;250000;59200;128500;1304000')); 


/* 5. id, 이름, 전화번호, email 을 속성으로 갖고 toString() 메쏘드를 갖는 Member 클래스를 만드세요. 
또한 이 클래스로 james와 maria 객체를 생성하고, toString() 메쏘드를 사용하여
 객체안의 속성 정보를 출력하는 코드도 만드세요. */

class Member {
    constructor(id, name, num, email) {
        this.id = id;
        this.name = name;
        this.num = num;
        this.email = email;
    }
    toString() {
        console.log(`id: ${this.id}\n이름: ${this.name}\n전화번호: ${this.num}\nemail: ${this.email}`);
    }
}
console.log('\n5번 답:\n')
const james = new Member(0,'제임스','010-1234-5678','james@naver.com');
const maria = new Member(1,'마리아','010-1111-2222','maria@naver.com');
james.toString();
console.log('\n')
maria.toString();