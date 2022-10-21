import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Ex04_() {
    const nav = useNavigate();
    // useNavigate -> 주소 경로를 입력받아 요청해줄 수 있는 Hook
    const [result, setResult] = useState('');
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [nick, setNick] = useState();

    // let id = '';
    // let pw = '';

    useEffect(function () {
        if (id == 'smhrd' && pw == '123' && nick == 'gai') {
            setResult('smhrd님 환영합니다');
            nav('/About?id=smhrd&nick=' + nick);
        } else {
            setResult('로그인실패');
        }
    }, [nick]);   // pw가 바뀔 때만 실행.

    function checkId(e) {
        // id = e.target.value;
        setId(e.target.value);
        // test = e.target.value;
        // console.log('id:', id);
        // console.log('pw:', pw);
    }
    function checkPw(e) {
        // pw = e.target.value;
        setPw(e.target.value);
        // console.log('id:', id);
        // console.log('pw:', pw);
    }
    // function resultSet() {
    //     if (id == 'smhrd' && pw == '123') {
    //         setResult('smhrd님 환영합니다');
    //         // nav('/About?id=smhrd');
    //     } else {
    //         setResult('로그인실패');
    //     }
    // }


    return (
        <>
            <input onChange={checkId} placeholder="아이디 입력"></input>
            <br></br>
            <input onChange={checkPw} placeholder="비밀번호 입력"></input>
            <br></br>
            <input onChange={(e) => { setNick(e.target.value) }} placeholder='닉네임 입력'></input>
            <br></br>
            {/* <h1>{result}</h1> */}
            {/* <h1>{(id == 'smhrd' && pw == '123') ? 'SMHRD님 환영합니다' : '로그인실패'}</h1> */}
            {/* <button onClick={resultSet}>로그인</button> */}
            <Link to='/'>메인페이지로 이동</Link>
        </>
    );
}

export default Ex04_;