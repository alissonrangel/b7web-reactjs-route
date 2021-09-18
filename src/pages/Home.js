import styled from 'styled-components';
import React, { useState , useEffect} from 'react';
import  {useHistory, useParams, useLocation, BrowserRouter, Switch, Route, Link} from 'react-router-dom';
function Home() {

  let history = useHistory();

  const handleButton = () => {

    setTimeout(() => {
      history.replace('/sobre');  
    }, 2000);
    
  }

  return (
    <div>
      <h4>Página Home</h4>
      <button onClick={handleButton}>Ir para a pagina sobre</button>
    </div>
  )
}

export default Home;