import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../services/api";


export const UserContext = createContext({});

function Providers({ children }) {

  const navigate = useNavigate();

//Login

  const onSubmitLogin = (data) => {
    axios.post('https://kenziehub.herokuapp.com/sessions', data)
    .then(response => {
      // localStorage.clear();
      localStorage.setItem('@token', response.data.token);
      localStorage.setItem('@id', response.data.user.id);
      navigate('/home', {replace: true});
    })
    .catch(() => 
      toast.error('Email ou/e senha incorreto!')
    );
  };

  const redirectToRegister = () => {
    navigate('/register', {replace: true});
  };

//Login

//Register

  const onSubmitRegister = (data) => {
    axios.post('https://kenziehub.herokuapp.com/users', data)
    .then(response => {
      toast.success('Conta criada com sucesso!')
      setTimeout(() => {
        navigate('/', {replace: true});
      }, 3000)
    })
    .catch(err => 
      console.log(err),
      toast.error('Ops, algo deu errado')
      );
  };

  const redirectToLogin = () => {
    navigate('/', {replace: true});
  };

//Register

//Dashboard

  const [infoUser, setInfoUser] = useState([]);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('@token') && localStorage.getItem('@id')) {
      api.defaults.headers.Authorization = `bearer ${localStorage.getItem("@token")}`
      api.get("/profile").then(response => {setInfoUser(response.data)
      setTechs(response.data.techs)
    })
      .catch(() => localStorage.clear())
      
    }
  }, [])
  const logout = () => {
      localStorage.clear()
      navigate('/', {replace: true});
  }

  //ModalAdd

  const [showModalAdd, setShowModalAdd] = useState(false);

  const buttonModalAdd = () => {
    setShowModalAdd(!showModalAdd);
  }
  

//Dashboard
  
  return(
    <UserContext.Provider
    value={{onSubmitLogin, redirectToRegister, navigate, onSubmitRegister, redirectToLogin, infoUser, logout, techs, setTechs
    ,showModalAdd, buttonModalAdd
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default Providers;