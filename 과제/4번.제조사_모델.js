/* 다음 배열에서 제조사(manufacturer)와 모델명(model)을 분리해서
별도의 배열을 각각 만드세요.
const cars = [‘buick skylark 320’, ‘plymouth satellite’, ‘amc rebel sst’, ‘ford torino’]; */

const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];

// 반복문
// const manufacturer1 = [], model1 = [];

// for (let car of cars) {
//     let carArr = car.split(' ');
//     manufacturer1.push(carArr[0]);
//     let carModel = '';
//     for (let i=1; i<carArr.length; i++) {
//         carModel += carArr[i] + ' ';
//     }
//     model1.push(carModel.trim());
// }
// console.log(manufacturer1, model1);


// map - 선생님 힌트
let manufacturer2 = cars.map(x => x.split(' ')[0]);
let model2 = cars.map(x => x.split(' ').slice(1).join(' '));
console.log(manufacturer2, model2);