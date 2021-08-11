import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyle from './styles/GlobalStyled.js';
import Cabecalho from './componentes/Cabecalho/Cabecalho.jsx';
import Search from './componentes/Search/Search.jsx';
import PetDao from './IDB/PetDao.js';
import Home from './componentes/Home/Home.jsx';
import Favoritos from './componentes/Favoritos/Favoritos.jsx';
import User from './componentes/User/User.jsx';

function App() {
  let DAO = new PetDao();

  const [nome, setNome] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if(nome === ''){
      const nomeLocalStorage = localStorage.getItem('Nome')||'User';
      setNome(nomeLocalStorage);
    }
  if(desc === ''){
      const descLocalStorage = localStorage.getItem('Desc')||'';
      setDesc(descLocalStorage);
    }
  },[nome,desc])

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Cabecalho nome={nome}/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/search'>
            <Search connection={DAO}/>
          </Route>
          <Route path='/favoritos'>
            <Favoritos connection={DAO}/>
          </Route>
          <Route path='/user'>
            <User nome={nome} setNome={setNome} desc={desc} setDesc={setDesc}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
