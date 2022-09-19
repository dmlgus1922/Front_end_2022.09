/* 
*****  0 + 5
 ***   1 + 5-2
  *    2 + 5-2-2
 ***   1 + 5-2
*****  0 + 5        
                    half = parseInt(num/2)
                    i=0; i<=half i++
******* 0 + 7          ' '*0 + '*'*(num-2*0) 0=i
 *****  1 + 7-2        ' '*1 + '*'*(num-2*1) 
  ***   2 + 7-2-2      ' '*2 + '*'*(num-2*2)
   *    3 + 7-2-2-2    ' '*3 + '8'*(num-2*3)  / 첫 번째 for 끝
  ***   2 + 7-2-2      ' '*2 + '*'*(num-2*2)  / 두 번째 for i=half-1; i>=0; i--
 *****  1 + 7-2        ' '*1 + '*'*(num-2*1)
******* 0 + 7          ' '*0 + '*'*(num-2*0)


*/
function ans3(num) {
    let half = parseInt(num/2);
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
console.log(ans3(11));