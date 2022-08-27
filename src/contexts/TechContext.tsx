import { createContext, ReactNode } from "react";
import api from "../services/api";
import { UserContext } from "./userContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ITechsProviders {
  children: ReactNode
}
interface ITechContext {
  addTech: (data: IDataForm) => Promise<void>
  deleteTech: (id: string | undefined) => Promise<void>
}
export interface IDataForm {

  title: string;
  status: string;
}
export const TechContext = createContext({} as ITechContext);

function TechComponent({children}: ITechsProviders) {

  const {techs, setTechs, buttonModalAdd} = useContext(UserContext);

  const addTech = async (data: IDataForm) => {
    
    await api.post("users/techs", data)
    .then(res => {setTechs([...techs, res.data])
      toast.success("Tecnologia adicionada")
      buttonModalAdd()
    })
    .catch((err) => console.log(err))
  }

  const deleteTech = async (idTech: string | undefined): Promise<void> => {

    await api.delete(`/users/techs/${idTech}`)
    .then(res => {
      const filtrados = techs.filter(({id})=> id !== idTech)
      setTechs(filtrados)
    })
    .catch((err) => console.log(err))
  }  

  return(
    <TechContext.Provider value={{addTech, deleteTech}}>
      {children}
    </TechContext.Provider>
  )
}

export default TechComponent;