import axios from 'axios'
import {useState} from 'react'

function Ex01() {
    const [movieInfo, setMovieInfo] = useState([]);
    async function getMovies() {
        const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101';
        const result = await axios.get(url)
        const movieList = result.data.boxOfficeResult.dailyBoxOfficeList
        
        // axios: 비동기 통신 방법으로 통신을 진행하겠습니다
        // asynct
        // async ~ await 를 적지 않으면 통신에 대한 응답값으로 Promise 타입이 반환되어진다.
        // 그 이유 --> 화면을 구성해주는 Component들이 요청을 보낼때 순차적으로 요청을 처리하기 위함.
        // console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
        
        setMovieInfo(movieList);
        
        
    }

    return (
        <>
            <h1>영화 데이터 확인 페이지</h1>
            <button onClick={getMovies}>영화 정보 가져오기</button>
            <table border='1'>
                <tbody>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                </tr>
                    {movieInfo.map(function(data){
                        return (
                            <tr>
                                <td>{data.rank}</td>
                                <td>{data.movieNm}</td>
                                <td>{data.openDt}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
        </>
    );
}

export default Ex01;