import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import KenzieRoutes from './Routes';
import {useEffect} from 'react';
import api from './services/api';


function App() {

useEffect(() => {
  api.get('users')
  .then(response => response)
}, []);

return (
    <div className='App'>
      <>
      <KenzieRoutes/>
      </>
    </div>
);
}

export default App;
