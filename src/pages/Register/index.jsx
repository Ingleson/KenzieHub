import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';

import { BaseRegisterStyled, FormStyled, LogoButton } from './style';
import { UserContext } from '../../contexts/userContext';

function Register() {

  const {navigate, onSubmitRegister, redirectToLogin} = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 dígitos').matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais!"),
    confirmPassowrd: yup.string().oneOf([yup.ref('passowrd')], 'Senhas devem ser iguais'),
    contact: yup.string().required('Insira um contato'),
    bio: yup.string().required('Insira uma bio').max(50)
  });

  useEffect(() => {
    if(localStorage.getItem('@token') && localStorage.getItem('@id')) {
      navigate('/', {replace: true});
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema)
  });

  return(

    <BaseRegisterStyled>
      <LogoButton>
        <h2>Kenzie Hub</h2> 
        <button onClick={redirectToLogin}>Voltar</button>
      </LogoButton>
      <main>
        <h3>Crie sua conta</h3>
        <span>rápido e grátis, vamos nessa</span>

        <FormStyled onSubmit={handleSubmit(onSubmitRegister)}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" 
            placeholder='Digite aqui seu nome' 
            id='name'
            {...register('name')}/>
            <span>{errors.name?.message}</span>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" 
            placeholder='Digite aqui seu email' 
            id='email'
            {...register('email')}/>
            <span>{errors.email?.message}</span>
          </div>

          <div>
            <label htmlFor="passowrd">Senha</label>
            <input type="password" 
            placeholder='Digite aqui sua senha' 
            id='password'
            {...register('password')}/>
            <span>{errors.password?.message}</span>
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" 
            placeholder='Digite novamente sua senha' 
            id='confirmPassword'
            {...register('confirmPassword')}/>
            <span>{errors.confirmPassowrd?.message}</span>
          </div>

          <div>
            <label htmlFor="bio">bio</label>
            <input type="text" 
            placeholder='Fale sobre você' 
            id='bio'
            {...register('bio')}/>
            <span>{errors.bio?.message}</span>
          </div>

          <div>
            <label htmlFor="contact">Contato</label>
            <input type="text" 
            placeholder='Opção de contato' 
            id='contact'
            {...register('contact')}/>
            <span>{errors.contact?.message}</span>
          </div>

          <div>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select id="course_module" {...register('course_module')}>
              <option value="Introdução ao FrontEnd">Primeiro Módulo</option>
              <option value="FrontEnd Avançado">Segundo Módulo</option>
              <option value="Introdução ao BackEnd">Terceiro Módulo</option>
              <option value="BackEnd Avançado">Quarto Módulo</option>
            </select>
            <span>{errors.course_module?.message}</span>
          </div>

          <button>Cadastrar</button>
        </FormStyled>
      </main>
    </BaseRegisterStyled>
  )
}

export default Register;