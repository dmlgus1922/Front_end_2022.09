import {useState} from 'react';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';

function Login() {
    const [inputId, setInputId] = useState();
    const [inputPw, setInputPw] = useState();

    const [params, setParamsId] = useSearchParams();

    const id = params.get('id');
    const pw = params.get('pw');
    const nav = useNavigate();

    function toAbout() {
        if (inputId == id && inputPw == pw && id) {
            nav('/About?id='+id);
        }    
    }
    return (
        <>
            <h1>Login페이지</h1>
            ID: <input type="text" onChange={(e) => setInputId(e.target.value)}></input>
            <br></br>
            PW: <input type="password" onChange={(e) => setInputPw(e.target.value)}></input>
            <br></br>
            <button onClick={toAbout}>로그인 시도</button>
            <br></br>
            <Link to='/'>메인페이지</Link>
        </>
    );

}

export default Login;