// 1번
const thisYear = new Date().getFullYear();
console.log(new Date() < '20230812');
console.log('20120101'[4] + '20120101'[5]);
console.log(Number('01'));
console.log(typeof new Date().getFullYear());
console.log(new Date().getMonth());
console.log(Number(new Date()));
console.log(parseInt(99/10));

const score = 89;
switch (parseInt(score / 10)) {
    case 10:
        console.log('a');
        break;
    case 9:
        console.log('a');
        break;
    case 8:
        console.log('b');
        break;
    case 7:
        console.log('c');
        break;
    default:
        console.log('f');
}