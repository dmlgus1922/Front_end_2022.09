function Ex01(props) {  
    // props라는 매개변수로 받아주면 부모 컴포넌트에서 속성값으로 넘긴 데이터를 전부 가져올 수 있음
    // 넘긴 데이터에 따라 화면 구성을 바꿔줄 수 있음
    return (
        <>
        {/* 받아온 myColor를 통해 첫번째 컴포 글씨 색상 바꾸기*/}
            <h1 style={{color : props.myColor}}>첫번째 컴포</h1>
            <h1>저의 이름은 {props.name}</h1>
            <h1>두번째 데이터 {props.ttt}</h1>
        </>
    );
}

export default Ex01;