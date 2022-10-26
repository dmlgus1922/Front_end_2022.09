import Item3 from "./Item3";
function Item2(props) {
    return (
        <div>
            <h1>Item2: {props.num}</h1>
            <Item3 num={props.num-1} name={props.nameVal}></Item3>
        </div>
    );
}

export default Item2;