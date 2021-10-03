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


function App() {
  return (
    <div className="App">
     
        <div class="container">
          <Header/>
          <Barmenu/>
          <Board/>
        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <input type="text" class="form-control modal-title" placeholder="Introduzca un titulo para la tarea" id="exampleModalLabel"></input>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Descripción:</label>
                  <textarea class="form-control" placeholder="Introduzca descripción de la tarea" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Hecho</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
