import './App.css';
import Modal from './components/Modal';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Categoria from './pages/Categoria'; 
import React, { useState , useEffect} from 'react';
import  {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import './components/estilo.css';

const isLogged = true;

const PrivateRoute = ({children, ...rest}) => {
  return (
    <Route {...rest} >
      { isLogged ? children : <Redirect to="/login" />}
    </Route>
  )
}

function App() {

  const [modalVisible, setModalVisible] = useState(false);

  function handleButtonClick() {    
    setModalVisible(!modalVisible);   
  }

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Meu site legal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/login" >Login</Link>
              </li>
              <li>
                <Link to="/sobre" >Sobre</Link>
              </li>
              <li>
                <Link to="/quem-somos" >Quem Somos</Link>
              </li>
              <li>
                <Link to="/categoria/esportes?tipo=esporte" >Esportes</Link>
              </li>
              <li>
                <Link to="/categoria/noticias?tipo=noticia" >Notícias</Link>
              </li>
              <li>
                <Link to="/categoria/viagens?tipo=viagem&subcat=newyork" >Viagem</Link>
              </li>
              <li>
                <Link to="/fklmfla" >Página que não existe</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/sobre">
            <Sobre />
          </PrivateRoute>
          {/* <Route path="/sobre">
            { isLogged ? <Sobre /> : <Redirect to='/login'/>}
          </Route> */}
          <Route path="/quem-somos">
            <Redirect to="/sobre" />
          </Route>
          <Route path="/categoria/:cat">
            <Categoria />
          </Route>
          <Route path="*">
            <h4>Página não encontrada</h4>
          </Route>
        </Switch>
        <hr/>
        <footer>Todos os direitos reservados</footer>
      </BrowserRouter>
      { true &&
        <footer>
          <button onClick={handleButtonClick}>Abrir Modal</button>
          <Modal id="modal" visible={modalVisible} setVisible={setModalVisible} >
            <h1>Testando 1,2,3...</h1>
          </Modal>
        </footer>  
      }
    </>
  );
}

export default App;
