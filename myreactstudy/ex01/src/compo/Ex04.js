import {useState} from 'react';
import {Link} from 'react-router-dom';

function Ex04() {
    const [result, setResult] = useState();
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    // let [id, pw] = ['', ''];
    // 일반 변수는 화면이 랜더링 될 때 다시 맨 처음 초기값으로 돌아간다.
    // 화면 랜더링 => 상태값이 바뀔 때
    let test = '';
    function checkId(e) {
        // id = e.target.value;
        setId(e.target.value);
        test = e.target.value;
        console.log(test);
    }   
    function checkPw(e) {
        // pw = e.target.value;
        setPw(e.target.value);
        console.log(test)
    }
    function logIn() {
        console.log(id, pw)
        if (id == 'smhrd' && pw == '123'){
            setResult('SMHRD님 환영합니다');
        } else {
            setResult('로그인실패');
        }
    }

    return (
        <>
            
            <input onChange={checkId} placeholder="아이디 입력"></input>
            <br></br>
            <input onChange={checkPw} placeholder="비밀번호 입력"></input>
            <button onClick={logIn}>로그인</button>
            <h1>{result}</h1>
            <Link to='/'>Home</Link>
        </>
    );
}

export default Ex04;