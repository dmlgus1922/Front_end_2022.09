import {Link, useSearchParams} from 'react-router-dom';
function About() {
    const [params, setParams] = useSearchParams();
    const id = params.get('id');
    return (
        <>
            <h1>소개페이지입니다.</h1>
            <p>{id}님 환영합니다</p>
            <Link to='/'>메인페이지</Link>
        </>
    );
}

export default About;