import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import bannerdog from './img//01_01bannerDog.JPG';



function App() {
  return (
    <div className="App">
     
        <div class="container">
          <div class="row">
            <div class="col">
                      <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                          <div class="input-group">
                              <button class="input-group-text" id="btnGroupAddon">Buscar</button>
                              <input type="text" class="form-control" placeholder="...lista" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
                          </div>
                      </div>
            </div>
            <div class="col">
                <h3 class="d-flex justify-content-center">TREYO</h3>
            </div> 
            <div class="col">
                <div class="btn-toolbar mb-3 justify-content-end" role="toolbar" aria-label="Toolbar with button groups"> 
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary"><i class="bi-info-circle"></i></button>
                    </div>
                </div>
            </div> 
          </div>
          

          <div class="row">
            <div class="col">
              <button style={{marginRight:2+'px'}} type="button" class="btn btn-primary" data-bs-target="#exampleModal2" data-bs-whatever="@mdo" data-bs-toggle="modal">Crear Lista</button>
              <button style={{marginLeft:2+'px'}} type="button" class="btn btn-primary" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Borrar Lista</button>
            </div>
        </div>

          <div class="row" style={{marginTop:1 +'rem'}}>
            <div class="col">
                <div style={{width:18 +'rem'}}>
                        <h3 style={{display:'inline'}} >Lista</h3>
                        <button style={{display:'inline', float:'right'}} type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+</button>
                </div>

                <div class="card" style={{width:18 +'rem'}} >
                    <img src={bannerdog} class="card-img-top" alt="LOGO"></img>
                    <div class="card-body">
                      <h5 class="card-title">Card title 1</h5>
                      <p class="card-text">...</p>
                      <a style={{float:'left', marginRight:5+'px'}} href="www.google.com" class="btn btn-primary"><i class="bi-trash"></i></a>
                      <a style={{float:'left'}} href="www.google.com" class="btn btn-primary"><i class="bi-justify-left"></i></a>
                    </div>
                </div>

            </div>
          </div>
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
