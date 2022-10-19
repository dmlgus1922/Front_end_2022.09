import {useState} from 'react';

function Ex01() {
    // const arr = ['눈','바람','비','해', 'ꉂꉂ(ᵔᗜᵔ*)'];
    const [arr, setArr] = useState(['눈','바람','비','해', 'ꉂꉂ(ᵔᗜᵔ*)']);
    // arr = arr.map((data) => {
    //     return <li>{data}</li>
    // })
    function deleteData(e) {
        setArr(arr.filter((data,index) => {
            return e.target.value != index
        }));
    }
    return (
        <>
            <ul>
                {arr.map((data, index) => {
                    return <li key={index}>
                            {data}
                            <button value={index} onClick={deleteData}>삭제</button>
                            </li>
                })}
    
            </ul>
        </>
    );
}

export default Ex01;