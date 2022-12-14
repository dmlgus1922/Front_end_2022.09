import {useState} from 'react';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Login() {
    const [inputId, setInputId] = useState();
    const [inputPw, setInputPw] = useState();

    const [params, setParams] = useSearchParams();
    // params: 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음
    // ex) id=test&pw=123&nick=김씨


    // const id = params.get('id');
    // const pw = params.get('pw');
    // const nick = params.get('nick');

    const id = useSelector(state => state.id);
    const pw = useSelector(state => state.pw);
    const nick = useSelector(state => state.nick);

    console.log(id, pw, nick)

    const nav = useNavigate();

    function toHome() {
        if (inputId == id && inputPw == pw && id) {
            console.log('성공');
            nav('/');
        } else {
            console.log('실패');
        }
    }
    return (
        <>
            <h1>Login페이지</h1>
            ID: <input type="text" onChange={(e) => setInputId(e.target.value)}></input>
            <br></br>
            PW: <input type="password" onChange={(e) => setInputPw(e.target.value)}></input>
            <br></br>
            <input name="nick" value={nick} type="hidden"></input>
            <button onClick={toHome}>로그인 시도</button>

            {
                inputId == id && inputPw == pw && id 
                ?
                <Link to={'/'}
                >로그인 시도</Link>
                :
                <Link>로그인 시도</Link>
            }
            <br></br>
            <Link to='/'>메인페이지</Link>
        </>
    );

}

export default Login;