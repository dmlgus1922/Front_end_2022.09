import {useState} from 'react';

function Ex04() {
    const [result, setResult] = useState();
    let [id, pw] = ['', ''];
    
    function checkId(e) {
        id = e.target.value;
    }   
    function checkPw(e) {
        pw = e.target.value;
    }
    function logIn() {
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
        </>
    );
}

export default Ex04;