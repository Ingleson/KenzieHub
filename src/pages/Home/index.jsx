import { useContext } from "react";
import ModalAdd from "../../components/ModalAdd";
import { UserContext } from "../../contexts/userContext";
import { BaseHome, HeadList, SectionTech } from "./style";
import { BsFillTrashFill } from 'react-icons/bs'

function Home(){

  const {infoUser, logout, techs, buttonModalAdd, showModalAdd} = useContext(UserContext);

  return(
    <div>
      {showModalAdd && <ModalAdd/>}
      <BaseHome>
        <header>
          <div className="div-header">
            <h2>Kenzie Hub</h2>
            <button onClick={logout}>Sair</button>
          </div>
        </header>

        <article className="article">
          <div className="status-profile">
            <h2>Olá, {infoUser.name}</h2>
            <span>{infoUser.course_module}</span>
          </div>
        </article>

        <main>
          {techs.length <= 0 ?
          <div>div
            <h2>Loading ...</h2>
            
          </div>  
          :
          <SectionTech>
            <HeadList>
              <h3>Tecnologias</h3>
              <button onClick={buttonModalAdd}>+</button>
            </HeadList>
            <ul>
              {techs.map(({id, title, status}) => (
                <li key={id}>
                  <h3>{title}</h3>
                  <div>
                    <span>{status}</span>
                    <button><BsFillTrashFill/></button>
                  </div>
                </li>
              ))}
            </ul>
          </SectionTech>
        }
          
        </main>
      </BaseHome>
    </div>
  )
}

export default Home;