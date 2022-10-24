import {Link, useSearchParams} from 'react-router-dom'

function About() {
    const [params, setParamsId] = useSearchParams();
    
    // 쿼리스트링으로 넘긴 데이터는 params에 저장되어 있다.
    const id = params.get('id');
    const nick = params.get('nick');
    console.log(params)
    return (
        <>
            <h1>{id}님 페이지입니다.</h1>
            <h1>별명은 {nick}입니다.</h1>
            <Link to='/'>Home</Link>
        </>
    );
}

export default About;