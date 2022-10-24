import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <h1>메인 페이지입니다</h1>
            <Link to='/Join'>회원가입</Link>  
            <br></br>
            <Link to='/Login'>로그인</Link>
        </>
    );
}
export default Home;