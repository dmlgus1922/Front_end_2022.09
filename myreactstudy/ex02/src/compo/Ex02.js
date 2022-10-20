import { useState } from 'react';

function Ex02() {
    const [todoArray, setTodoArray] = useState([]);
    const [todo, setTodo] = useState();

    function saveTodo(e) {
        setTodo(e.target.value);
    }

    function addArray() {
        document.getElementById('todo').value = '';

        // 리액트에서 배열에 값을 추가할 때는 push가 아닌 concat을 쓴다
        setTodoArray(todoArray.concat(todo));
        // 불변성 유지: 상태값을 업데이트할 때는 기존 상태를 그대로 두며
        //              새로운 값으로 상태를 업데이트해야 함
    }

    function deleteTodo(e) {
        // index는 숫자
        // e.target.value는 문자
        // index !== e.target.value; 무조건 true 뜰 것
        setTodoArray(todoArray.filter((data, index) => {
            return index != e.target.value;
        }));
    }

    return (
        <>
            <h1>TodoList</h1>

            <input id='todo' onChange={saveTodo}></input>
            <button onClick={addArray}>추가</button>

            <ul>
                {todoArray.map((data, index) => {
                    return (
                    <li key={index}>
                        {data}
                        <button onClick={deleteTodo} value={index}>삭제</button>
                    </li>
                    )
                })}
            </ul>

            {/* {todoArray.map((data, index) => {
                return (
                <div key={index}>
                    <h1>{data}</h1>
                    <button onClick={deleteTodo} value={index}>삭제</button>
                </div>
                )
            })} */}
        </>
    );
}

export default Ex02;