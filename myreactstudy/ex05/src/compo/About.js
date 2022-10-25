import {Link, useSearchParams} from 'react-router-dom';
function About() {
    const [params, setParams] = useSearchParams();

    const nick = params.get('nick');
    return (
        <>
            <h1>{nick}님 환영합니다</h1>
            <Link to='/'>메인페이지</Link>
        </>
    );
}

export default About;