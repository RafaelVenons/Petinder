import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyle from './styles/GlobalStyled.js';
import Cabecalho from './componentes/Cabecalho';
import Search from './componentes/Search.jsx';
import PetDao from './IDB/PetDao.js';
import Home from './componentes/Home.jsx';
import Favoritos from './componentes/Favoritos.jsx';
import User from './componentes/User.jsx';

function App() {
  let DAO = new PetDao();
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Cabecalho/>
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
            <User/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
