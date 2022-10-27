import { Link, useSearchParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

function Home() {
    // const [params, setparams] = useSearchParams();
    // const nick = params.get('nick');

    const nick = useSelector(state => state.nick)
    const dispatch = useDispatch(); 

    let info = '';
    if (nick) {
        info = nick + '님 환영합니다';
    }

    function logout() {
        dispatch({
            type: 'logout'
        })
    }
    

    return (
        <>
            <h1>Home</h1>
            <h1>{info}</h1>
            {nick ? <></> : <Link to='/Join'>회원가입</Link>}
            <br></br>
            {nick ? <button onClick={logout}>로그아웃</button> : <Link to='/Login'>로그인</Link>}


            
        </>
    );
}
export default Home;