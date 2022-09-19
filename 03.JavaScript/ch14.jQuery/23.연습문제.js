$(document).ready(function() {
    // 카운트 다운
    let count = 3;
    const show = $('#show');
    function disp(num) {
        // const img = document.createElement('img');
        $('<img></img>')
            .attr('src', '../ch14.jQuery/digits/'+num+'.svg')
            .attr('width','800')
            .attr('id','second')
            .css({marginTop:'30px',marginBottom:'200px',marginLeft:'200px'})
            .appendTo(show);
        // img.setAttribute('src', '../ch14.jQuery/digits/'+num+'.svg');
        // img.setAttribute('width', '800');
        // img.setAttribute('id', 'second');
        // img.style.marginTop = '30px';
        // img.style.marginBottom = '200px';
        // img.style.marginLeft = '200px';
        // show.appendChild(img);
    }
    function hide() {
        // const sec = $('#second');
        show.children().remove();
    }
    function countDown() {
        disp(count--);
        let interval = setInterval(() => {
            hide();
            if (count != 0) 
                disp(count--);
        }, 1000);
        setTimeout(() => {
            clearInterval(interval);
            $('#Q').show();
        }, 3000);
    }
    
    $('#Q').hide(); //첫 화면 문제 전체 숨기기
    countDown();
    // let num = 3;
    // $('#prevent').text(num);
    // const si = setInterval(() => {
    //     num--;
    //     $('#prevent').text(num);
    // }, 1000);

    // // 3초 후 문제 보이고 카운트다운 div 숨기기
    // setTimeout(() => {
    //     $('#Q').show();
    //     $('#prevent').hide();
    // },3000);

    // 입력, 정답창 보이고 숨기기
    $('.inpAns1,.inpAns2,.inpAns3').hide();

    $('#btnShow1, #btnShow2, #btnShow3').click(function(e) {
        console.log($(this)[0].id);
        const id = $(this)[0].id;
        const idNum = id[id.length-1];
        $('.inpAns'+idNum).show();
    });

    $('#btnHide1, #btnHide2, #btnHide3').click(function(e) {
        const id = $(this)[0].id;
        const idNum = id[id.length-1];
        $('.inpAns'+idNum).hide();
    });
    

    // 1번 문제 풀이
    $('#btn1').click(function(e) {
        let input = $('#input1').val();
        input = input.replace(/ +/g, ' ').split(' ');
        if (input.length != 2){
            alert('정수 두 개를 입력해주세요');
            return;
        }
        const num1 = parseInt(input[0]), num2 = parseInt(input[1]);
        if (num1<10 || num1 > 20 || num2 < 10 || num2 > 30 || num1+4 > num2) {
            alert('숫자 범위를 지켜주세요');
            return;
        }
        const second = num1 + 1, lastSecond = num2 - 1;

        let result = [];
        for (let i=num1; i<=num2; i++) {
            if (i == second || i == lastSecond){
                continue;
            }
            result.push(2**i);
        }
        $('#a1').text(result.join(', '));
    });

    // 2번 문제풀이
    $('#btn2').click(function(e) {
        let input = $('#input2').val();
        input = input.replace(/[^a-z]/g, ' ').replace(/ +/g, ' ').split(' ');
        let count = 0;
        for (let word of input) {
            if (word == 'the')
                count++;
        }
        $('#a2').text(`the의 개수: ${count}`);
    });
    
    // 3번 문제풀이
    $('#btn3').click(function(e) {
        let input = $('#input3').val();
        input = input.replace(/ +/g, ' ').split(' ');
        if (input.length != 2) {
            alert('정수 두 개를 입력해주세요');
            return;
        }
        const num1 = parseInt(input[0]), num2 = parseInt(input[1]);
        if (num1 < 10 || num1 > 100 || num2 < 10 || num2 > 100){
            alert('숫자 범위를 지켜주세요');
            return;
        }
        const result = [];
        for (let i=1; i<=num1; i++) {
            if (num1 % i == 0 && num2 % i == 0)
                result.push(i);
        }
        $('#a3').html(`${num1}, ${num2}의 공약수<br>${result.join(', ')}`);
    });
});