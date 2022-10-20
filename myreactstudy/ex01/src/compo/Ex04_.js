import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Ex04_() {
    const [result, setResult] = useState('');
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    
    useEffect(function () {
        if (id == 'smhrd' && pw == '123') {
            setResult('smhrd님 환영합니다');
        } else {
            setResult('로그인실패');
        }
    }, [pw]);   // pw가 바뀔 때만 실행.

    function checkId(e) {
        // id = e.target.value;
        setId(e.target.value);
        // test = e.target.value;
        // console.log(test);
    }
    function checkPw(e) {
        // pw = e.target.value;
        setPw(e.target.value);
        // console.log(test)
    }
    

    return (
        <>
            <input onChange={checkId} placeholder="아이디 입력"></input>
            <br></br>
            <input onChange={checkPw} placeholder="비밀번호 입력"></input>
            <h1>{result}</h1>
            {/* <h1>{(id == 'smhrd' && pw == '123') ? 'SMHRD님 환영합니다':'로그인실패'}</h1> */}
            <Link to='/'>Home</Link>
        </>
    );
}

export default Ex04_;