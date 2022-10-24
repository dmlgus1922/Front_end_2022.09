import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';
import About from './compo/About';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
