import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { BaseLogin, NoFormBox } from './style';


const Login = () => {

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido !").required('Email obrigatório !'),
    password: yup.string().required("Senha obrigatória !").matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais!")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('@token') && localStorage.getItem('@id')) {
      navigate('/home', {replace: true});
    }
  });

  const onSubmitFunction = (data) => {
    axios.post('https://kenziehub.herokuapp.com/sessions', data)
    .then(response => {
      console.log(response.data);
      window.localStorage.clear();
      window.localStorage.setItem('@token', response.data.token);
      window.localStorage.setItem('@id', response.data.user.id);
      navigate('/home', {replace: true});
      toast.success('Acesso autorizado')
    })
    .catch(() => 
      toast.error('Email ou/e senha incorreto!')
    );
  };

  const redirection = () => {
    navigate('/register', {replace: true});
  };

  return (
    <BaseLogin>
      <h2>Kenzie Hub</h2>
      <NoFormBox>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div>
            <label htmlFor='email'> Email </label>
            <input type="text" 
            placeholder='Email'
            id='email'
            {...register('email')}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <label htmlFor='password'> Senha </label>
            <input type="password" 
            placeholder='Senha'
            id='password'
            {...register('password')}
            />
            <span>{errors.password?.message}</span>
          </div>
          <button type='submit'>Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <button onClick={redirection}>Cadastre-se</button>
      </NoFormBox>
    </BaseLogin>
  )
}

export default Login;