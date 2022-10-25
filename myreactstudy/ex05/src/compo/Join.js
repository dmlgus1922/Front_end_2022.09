import {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom';

// useRef: 컴포넌트 안의 특정DOM(요소)을 선택할 수 있겠끔 도와주는 기능이다.

function Join() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNick, setInputNick] = useState('');
    
    const useId = useRef();
    const nav = useNavigate();

    function reset() {
        setInputId('');
        setInputPw('');
        setInputNick('');
        // ref.current -> ref가 적용된 태그를 의미. 
        // 가장 마지막에 적용된 태그를 가리키나 보다.

        useId.current.focus();
    }
    // function toLogin() {
    //     if (inputId == 'aaa' && inputPw == 'aaa' && inputNick == 'aa') {
    //         nav('/Login');
    //     }
    // }

    // form: 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달
    return (
        <>
            <h1>회원가입 페이지입니다</h1>
            <form action='/Login'>
                ID: <input type="text" name="id" value={inputId} onChange={(e) => setInputId(e.target.value)} ref={useId}></input>
                <br></br>
                PW: <input type="password" name="pw" value={inputPw} onChange={(e) => setInputPw(e.target.value)}></input>
                <br></br>
                NICK: <input type="text" name="nick" value={inputNick} onChange={(e) => setInputNick(e.target.value)}></input>
                <br></br>
                {/* <button onClick={() => nav(`/Login?id=${inputId}&pw=${inputPw}&nick=${inputNick}`)}>Join</button> */}
                <button>Join</button> {/* form 쓸 때 */}
                <button onClick={reset} type="button">초기화</button>
            </form>
            <br></br>
            <Link to='/'>메인페이지</Link>

        </>
    );
}

export default Join;