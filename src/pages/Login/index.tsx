import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';

import { BaseLogin, NoFormBox } from './style';
import { IUserLogin, UserContext } from '../../contexts/userContext';


const Login = () => {

  const {onSubmitLogin, redirectToRegister, navigate} = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório !'),
    password: yup.string().required('Senha obrigatória !')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema)
  });

  useEffect(() => {
    if(localStorage.getItem('@token') && localStorage.getItem('@id')) {
      navigate('/home', {replace: true});
    }
  });

  return (
    <BaseLogin>
      <h2>Kenzie Hub</h2>
      <NoFormBox>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
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
        <button onClick={redirectToRegister}>Cadastre-se</button>
      </NoFormBox>
    </BaseLogin>
  )
}

export default Login;