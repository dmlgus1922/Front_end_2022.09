import Item2 from "./Item2";
import {useSelector} from 'react-redux';
function Item1(props) {
    const name = useSelector((state) => state.name);
        // 제공되는 store에 접근해서 상태값을 가져오는 것
    return (
        <div>
            <h1>Item1: {name}</h1>
            
            <Item2 num={props.num - 2} nameVal={props.nameVal}></Item2>
        </div>
    );
}

export default Item1;