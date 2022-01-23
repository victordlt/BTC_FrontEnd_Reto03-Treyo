import React, {Component} from "react";

import {connect} from 'react-redux';

class Popuptareanueva extends Component {
    constructor(props){
        super(props);
        this.nombrelistas="Tarjeta";
        this.idlista='';
    }

    addtask(){
        const newtaskname = document.getElementById('nombretareanueva').value;
        const newtaskdescripcion = document.getElementById('descripciontareanueva').value;
         this.props.addnewtask(newtaskname,newtaskdescripcion,(this.props.idlistactual));
         document.getElementById('btn02_close').click();
         console.log("el id de la lista seleccionada_ "+this.props.idlistactual);
     }

    render(){     
        return(               
            <div class="modal fade" id="nuevatarea" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <input type="text" class="form-control modal-title" placeholder="Introduzca un titulo para la tarea" id="nombretareanueva"></input>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                <label for="message-text" class="col-form-label">Descripción:</label>
                                <textarea id="descripciontareanueva" class="form-control" placeholder="Introduzca descripción de la tarea"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button id="btn02_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={(e)=>this.addtask()}>Hecho</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

const mapStateToProps=state=>({
    idlistactual:state.listidact,
})
const mapDispatchToProps=(dispatch)=>({
    addnewtask:(titulo,texto,idlista)=>{
        console.log("Dispatch_adnewTask: "+titulo);
        console.log("Dispatch_adnewTask: "+texto);
        dispatch({
            type:'ADD_NEWTASK',
            payload:titulo,
            payload2:texto,
            payload3:idlista,
        });
    }
})

const connected = connect(mapStateToProps,mapDispatchToProps)(Popuptareanueva)

export default connected;
