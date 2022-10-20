import {useEffect, useState} from 'react'

function Ex01() {
    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);

    // useEffect : 렌더링 되자마자 이것부터 실행해주세요~
    // -> 상태값이 바뀔 때마다(다시 렌더링할 때마다) 다시 실행한다.
    useEffect(function() {
        console.log('test');
    }, [data]);     // data라는 상태값이 바뀌었을 때만 실행해주세요~

    function plus() {
        setData(data+1);
    }
    function minus() {
        setData(data-1);
    }
    function plus1() {
        setData1(data1+1);
    }
    function minus1() {
        setData1(data1-1);
    }

    return (
        <>
            <h1>useEffect 첫번째</h1>
            <button onClick={plus}>+</button>
            <span>{data}</span>
            <button onClick={minus}>-</button>
            
            <br></br>

            <button onClick={plus1}>+</button>
            <span>{data1}</span>
            <button onClick={minus1}>-</button>
            
        </>
    );
}

export default Ex01;