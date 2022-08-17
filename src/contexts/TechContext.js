import { createContext } from "react";
import api from "../services/api";
import { UserContext } from "./userContext";
import { useContext } from "react";

export const TechContext = createContext({});

function TechComponent({children}) {

  const {techs, setTechs} = useContext(UserContext);

  const addTech = async (data) => {
    
    await api.post("users/techs", data)
    .then(res => setTechs([...techs, res.data]))
    .catch((err) => console.log(err))
  }

  return(
    <TechContext.Provider value={{addTech}}>
      {children}
    </TechContext.Provider>
  )
}

export default TechComponent;