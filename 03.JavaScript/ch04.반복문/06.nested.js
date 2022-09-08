// 별로 직각삼각형 그리기 1사분면
let star = '*';
for (let i=1; i<=5; i++) {
    console.log(star);    
    star += '*';
}

for (let i=1; i<=5; i++) {
    let stars = '';
    for (let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}


// 역 직각삼각형 그리기 4사분면
for (let i=5; i>=1; i--) {
    let stars = '';
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}

// 2사분면
//     *
//    **
//   ***
//  ****
// *****
for (let i=1; i<=5; i++) {
    let stars = '';
    for (let k=5-i; k>=1; k--) {
        stars += ' ';
    }
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}

// 3사분면
// *****
//  ****
//   ***
//    **
//     *
for (let i=5; i>=1; i--) {
    stars = '';
    for (let k=0; k<5-i; k++) {
        stars += ' ';
    }
    for (let k=1; k<=i; k++) {
        stars += '*';
    }
    console.log(stars);
}