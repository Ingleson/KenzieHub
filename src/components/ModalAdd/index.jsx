import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditModal } from './style';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { TechContext } from '../../contexts/TechContext';


function ModalAdd() {

  const {buttonModalAdd} = useContext(UserContext)
  const {addTech} = useContext(TechContext);

  const formSchema = yup.object().shape({
    title:yup.string().required('Insira o nome da sua tecnológia').min(3),
  });
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  return(
    <EditModal>
      <section>
        <div className='mini-head'>
          <h4>Cadastrar Tecnologia</h4>
          <button onClick={buttonModalAdd}>X</button>
        </div>
        <form onSubmit={handleSubmit(addTech)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" 
            placeholder="Adicione sua tecnologia"
            id="name"
            {...register("title")}
            />
            <span>{errors.name?.message}</span>
          </div>

          <div>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </section>
    </EditModal>  
  ) 
}

export default ModalAdd;