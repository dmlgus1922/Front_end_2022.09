const maria = {name:'마리아', age:24, gender:'여자'};
const james = {'name':'제임스', 'age':28, 'gender':'남자'};

// for 반복문에서 in을 사용해야함
for (let key in maria) {
    console.log(key, maria[key]);
}

const persons = [maria, james];
for (let person of persons) {       // persons는 배열이므로 for of를 씀
    for (let key in person) {       // person은 객체이므로 for in을 씀
        console.log(key, person[key]);
    }
}

console.clear();
console.log(persons, typeof persons); // array라는 object
console.log(persons[0]);

// 외부와 데이터를 주고받는 경우
const externalForm = JSON.stringify(persons); // json 파일로
console.log(externalForm);

const internalForm = JSON.parse(externalForm); // 다시 내부에서 쓸 때
console.log(internalForm);