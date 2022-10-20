// import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';
import Ex03 from './compo/Ex03';
import Ex04 from './compo/Ex04';
import Ex04_ from './compo/Ex04_';
import Home from './compo/Home';
import About from './compo/About';
import Header from './compo/Header';

import {Routes, Route} from 'react-router-dom';
// Routes : 여러개의 페이지(컴포넌트)에 대한 정보를 가지고 있는 태그
// Router: 페이지에(컴포넌트)에 경외


function App() {  // App이 부모 컴포넌트
  // props: 속성값 전달(부모 컴포넌트가 자식 컴포넌트한테 데이터를 전달할 때 사용)
  // const name = '승환';
  // const myColor = 'red';
  return (
    // <Ex01 name={name} ttt='123' myColor={myColor}></Ex01> // Ex01이 자식 컴포넌트
    // <Ex02></Ex02>
    // <Ex03></Ex03>
    // <Ex04_></Ex04_>
    <>
      {/* header를 미리 만들고 활성화 */}
      <Header></Header> 
      <Routes>
      <Route path='/login' element={<Ex04></Ex04>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
