/**/
import './App.css';
/**/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
/**/

/**/
import Board from './componentes/Board';
import Barmenu from './componentes/Barmenu';
import Header from './componentes/Header';
import Popuplistanueva from './componentes/Popuplistanueva';
import Popuptareanueva from './componentes/Popuptareanueva';
import Popupborrarlista from './componentes/Popupborrarlista';

import React from 'react';


function App() {
  return (
    <div className="App">    
        <div class="container">
          <Header/>
          <Barmenu/>
          <Board/>
        </div>
        <Popuplistanueva/>
        <Popuptareanueva/>
        <Popupborrarlista/>
    </div>
  );
}


export default App;
