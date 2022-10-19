import {useState} from 'react'
// useState: 리액트에서 기본적으로 제공하는 기능(Hook)
// --> 상태값을 만들 수 있는 기능 제공
// 상태값: 화면이 보여진 후에 값이 바뀌면 화면도 바뀔 수 있는 값

function Ex02() {
    const [result2, setResult2] = useState('일단 야근'); // useState('초기값')
    // result2 -> 상태값을 나타낼 수 있는 값
    // setResult2 -> 상태값을 바꿀 수 있는 함수
    // 비구조할당 방법

    let result = '야근';
    // 일반 변수는 화면이 사용자에게 처음 보여졌을 때 (처음 랜더링 됐을 때)
    // -> 이 때에만 사용자에게 보여진다
    
    function chResult() {
        result = '칼퇴!';
        console.log('1: ' + result);
        if (result2 == '야근'){
            setResult2('칼퇴'); // 이건 젤 마지막에 실행됨
            // 칼퇴가 result2에 들어감
        } else {
            setResult2('야근'); // 이건 젤 마지막에 실행됨
        }
        console.log('2:', result2);
    }
    return (
        <>
            <h1>두번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1>
            <h1>오늘은 2 {result2}</h1>
            <button onClick={chResult}>바꾸기</button>
        
        </>
    );
}

export default Ex02;