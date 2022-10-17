import logo from './logo.svg';
import './App.css';
import './test.css';  // 외부 css파일 import
import App2 from './App2';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';

function App() {
  const name = '승환';
  const data = 'ex02';
  let num = 10;

  function chNum() {
    num = 30;
    console.log(num);
  }

  // return 안에 사용자 정의 태그 구조를 작성할 수 있다.
  return (
    // JSX 문법 -> JavaScript와 HTML을 같이 사용할 수 있는 문법
    // 규칙 1: 꼭 html 구조는 한 가지 태그로 묶여있어야 한다.
    // 규칙 2: 모든 태그는 닫는 태그가 존재. ex) <br></br>
    // 빈태그(Fragment)로도 묶어서 사용 가능 <> </>
    // 규칙 3: JSX 문법 안에서는 사용할 수 있는 JS 문법이 제한되어 있다.
    // 3항 연산자는 가능
    // 규칙 4: className
    
    <div>
      <h1 className='first'>HELLO REACT</h1>
      <h1 style={{color:'red'}} id="test">월요일 파이팅!</h1>
      {/* 변수를 사용할 때는 {변수명}으로 사용 */}
      <h1>선생님 이름은 {name === '승환' ? name : '영표'}</h1>
      <App2></App2>
      {data === 'ex01' ? <Ex01></Ex01> : <Ex02></Ex02>}
      <h1>{num}</h1>
      <button onClick={chNum}>숫자 바꾸기</button>
    </div>
  );
}

// 위의 사용자 정의 태그를 내보내기
export default App;
