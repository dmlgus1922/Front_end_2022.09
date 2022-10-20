import {Link} from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Main Page</p>

            {/* 
                리액트에서 라우터를 통한 페이지 이동을 할 때는
                a태그보다 Link태그를 사용하자
                
                App.js에서 라우터로 컴포넌트를 미리 활성화해놓음
                a태그로 이동하면 주소값에 해당하는 컴포넌트를 한번 더 만듦

                Link는 활성화된 그 컴포넌트로 이동만 함
            */}
            {/* <a href="./login">로그인 페이지로 이동</a>  */}

            <Link to="./login">로그인 페이지로 이동</Link>
            <br></br>
            <Link to="./About">소개 페이지로 이동</Link>
        </>
    );
}

export default Home;