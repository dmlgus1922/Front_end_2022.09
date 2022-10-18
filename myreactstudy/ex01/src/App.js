// import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';
import Ex03 from './compo/Ex03';
import Ex04 from './compo/Ex04';
function App() {  // App이 부모 컴포넌트
  // props: 속성값 전달(부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달할 때 사용)
  const name = '승환';
  const myColor = 'red';
  return (
    // <Ex01 name={name} ttt='123' myColor={myColor}></Ex01> // Ex01이 자식 컴포넌트
    // <Ex02></Ex02>
    // <Ex03></Ex03>
    <Ex04></Ex04>
  );
}

export default App;
