import { useState } from "react";
import axios from "axios";
import {Footer} from '../../components'



const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Se solicita: usuario | contraseña - se le pide a la API los mensajes
    //Si los datos son correctos -> inicia seccion
    //Si no son correctos, arrojara un error

    const authObject = {
      'Project-ID' : "bdb30ced-ceea-436e-bdba-872a97124968",
      'User-Name': username, 
      'User-Secret': password
    }
    try {
      //Se solicita: usuario | contraseña - se le pide a la API los mensajes
      await axios.get('https://api.chatengine.io/chats', {headers: authObject});
      //Si los datos son correctos -> inicia seccion

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload();
    } catch (error) {

      setError('Oops, verifica tu usuario o contraseña')

      //Si no son correctos, arrojara un error
    }

  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">ConexionApp</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Usuario"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Contraseña"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span className="text-submit" >Comienza a chatear</span>
            </button>
          </div>
        </form>
        <span className="login-error" >{error}</span>
        <Footer />
      </div>
    </div>
  );
};

export default Modal;
