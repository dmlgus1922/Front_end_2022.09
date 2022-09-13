// 상속(inheritance) 오버라이딩(overriding) - 메소드 재정의
class Person {
    constructor (name, age, gender) { // 파이썬 __inint__이랑 비슷
        this.name = name;
        this.age = age;
        this.gender=gender;
    }
    toString() {  // 메소드
        return `저는 ${this.name}이고 나이는 ${this.age}살이며 ${this.gender}입니다.`;
    }
}

const hong = new Person();
console.log(hong.toString());
console.log('----------------------------');

class Student extends Person {
    constructor (name, age, gender, scholarship=100000) {
        super(name, age, gender);    // 새로운 속성값을 만들려면 부모의 속성값을 불러야 한다.
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() + '\n' + `장학금은 ${this.scholarship}원을 받았습니다.`;
    }
}

const student = new Student('춘향', 17, '여자', 200000);
console.log(student.toString());
console.log('------------------------------');
// Teacher 클래스 - Person 상속, 속성: 담당 부서 추가, toString()도 고치기

class Teacher extends Person {
    constructor (name, age, gender,department = 'js b') {
        super(name, age, gender);   
        // 부모의 생성자에 자식이 받은 매개변수를 넣는 것. 이게 없으면 걍 기본 매개변수가 들어감(없다면 undefined)
        
        this.department = department;
    }
    toString() {
        return super.toString() + '\n' + `저는 ${this.department}를 담당하고 있습니다.`
    }
}

const teacher = new Teacher('김의현', 26, '남자');
console.log(teacher.toString());