import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';
import About from './compo/About';


import {Routes, Route} from 'react-router-dom';

//redux 재료
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(currentState, action) {
  // currentState : 현재 state값
  // action : 컴포넌트에서 넘긴 메시지

  // currentState 기본값 설정
  if (!currentState) {
    return {
      id : '',
      pw : '',
      nick : ''
    }
  } 
  // action에 있는 값(message)을 가져와서 State 변경 로직
  else if (action.type == 'join') {
    currentState.id = action.id;
    currentState.pw = action.pw;
    currentState.nick = action.nick;
  } else if (action.type == 'logout') {
    return {
      id : '',
      pw : '',
      nick : ''
    }
  }
  // 변경 후 반환
  return {...currentState}
}

const store = createStore(reducer);

function App() {
  return (
    <>
      {/* 라우트는 get방식만 받을 수 있다. form태그 post로 보내면 못 받아옴 */}
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
      </Provider>
    </>
  );
}

export default App;