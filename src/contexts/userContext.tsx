import { createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction } from "react";
import { toast } from 'react-toastify';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from "../services/api";

interface IProvidersProps {
  children: ReactNode
}

export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}
interface IInfoUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    created_at: string;
    updated_at: string;
    techs: [];
    works: [];
    avatar_url: null;
}

export interface ITechs {
  title: string;
  status: string;
  id?: string;
}

interface IUserContext {
  onSubmitLogin: (data: IUserLogin) => void;
  redirectToRegister:() => void;
  onSubmitRegister:(data: IUserRegister) => void;
  redirectToLogin: () => void;
  logout: () => void;
  infoUser: IInfoUser;
  setTechs: Dispatch<SetStateAction<ITechs[]>>;
  techs: ITechs[];
  showModalAdd: boolean;
  buttonModalAdd: () => void;
  navigate: NavigateFunction;

}


export const UserContext = createContext<IUserContext>({} as IUserContext);

function Providers({ children }: IProvidersProps) {

  const [infoUser, setInfoUser] = useState<IInfoUser>({} as IInfoUser);
  const [techs, setTechs] = useState<ITechs[]>([]);
  
  const navigate = useNavigate();

//Login

  const onSubmitLogin = (data: IUserLogin) => {
    axios.post('https://kenziehub.herokuapp.com/sessions', data)
    .then(response => {
      localStorage.setItem('@token', response.data.token);
      localStorage.setItem('@id', response.data.user.id);
      setInfoUser(response.data.user)
      setTechs(response.data.user.techs)
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

  const onSubmitRegister = (data: IUserRegister) => {
    axios.post('https://kenziehub.herokuapp.com/users', data)
    .then(response => {
      toast.success('Conta criada com sucesso!')
      setTimeout(() => {
        navigate('/', {replace: true});
      }, 3000)
    })
    .catch(() => 
      toast.error('Ops, algo deu errado')
      );
  };

  const redirectToLogin = () => {
    navigate('/', {replace: true});
  };

//Register

//Dashboard

  useEffect(() => {
    if(localStorage.getItem('@token') && localStorage.getItem('@id')) {
      api.defaults.headers.common.Authorization = `bearer ${localStorage.getItem("@token")}`
      api.get("/profile").then(response => {setInfoUser(response.data)
      setTechs(response.data.techs)
      navigate('/home', {replace: true})
    })
      .catch(() => localStorage.clear())
    }
    navigate('/', {replace: true})
  },[])
  const logout = () => {
      localStorage.clear()
      navigate('/', {replace: true});
  }

  //ModalAdd

  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);

  const buttonModalAdd = () => {
    setShowModalAdd(!showModalAdd);
  }

  //ModalAdd
  
//Dashboard
  
  return(
    <UserContext.Provider
    value={{onSubmitLogin, redirectToRegister, navigate, onSubmitRegister, redirectToLogin, infoUser, logout,
      techs, setTechs,showModalAdd, buttonModalAdd}}>

      {children}
      
    </UserContext.Provider>
  );
};

export default Providers;