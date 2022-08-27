import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';

import {Routes, Route} from 'react-router-dom';

const KenzieRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes> 
  );
}

export default KenzieRoutes;