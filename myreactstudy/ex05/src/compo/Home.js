import { Link, useSearchParams } from "react-router-dom";


function Home() {
    const [params, setparams] = useSearchParams();
    const nick = params.get('nick');

    let info = '';
    if (nick) {
        info = nick + '님 환영합니다';
    }

    

    return (
        <>
            <h1>Home</h1>
            <h1>{info}</h1>
            {nick ? <></> : <Link to='/Join'>회원가입</Link>}
            <br></br>
            {nick ? <Link to='/'>로그아웃</Link> : <Link to='/Login'>로그인</Link>}


            
        </>
    );
}
export default Home;