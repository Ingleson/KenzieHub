import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BaseHome } from "./style";

function Home(){

  const [infoUser, setInfoUser] = useState([]);

  useEffect(() => {
    api.defaults.headers.authorization = `bearer ${localStorage.getItem('@token')}`
    api.get("/profile").then(response => setInfoUser(response.data)).catch(err => console.log(err))
  }, [])

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear()
    navigate('/', {replace: true});
  }

  return(
    <BaseHome>
      <header>
        <div>
          <h2>Kenzie Hub</h2>
          <button onClick={logout}>Sair</button>
        </div>
      </header>

      <article>
        <div>
          <h2>Olá, {infoUser.name}</h2>
          <span>{infoUser.course_module}</span>
        </div>
      </article>

      <main>
        <div>
          <h2>Que pena! Estamos em desenvolvimento  :(</h2>
          <span>Nossa aplicação está em desenvolvimento, em breve teremos novidade</span>
        </div>
      </main>
    </BaseHome>
  )
}

export default Home;