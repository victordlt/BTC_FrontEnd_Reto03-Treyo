import React, {Component} from "react";

import {connect} from 'react-redux';

class Popupborrarlista extends Component {
    constructor(props){
        super(props);
        this.nombrelistas="Tarjeta";
        this.idlista='';
    }

    deletelist(){
        this.props.listas.map((list)=>{
            if(document.getElementById('checkbox'+list.id).checked){
               console.log("para ser borrada, se seleccionó checkbox"+list.id);
               this.props.deletelist(list.id); 
            };
            document.getElementById('btn03_close').click();
        });
  
        // const newtaskdescripcion = document.getElementById('descripciontareanueva').value;
        //  this.props.addnewtask(newtaskname,newtaskdescripcion,(this.props.idlistactual));
        //  document.getElementById('btn02_close').click();
        //  console.log("el id de la lista seleccionada_ "+this.props.idlistactual);
     }

    render(){     
        return(               
            <div class="modal fade" id="borrarlista" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                        {this.props.listas.map((lista)=>(
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id={"checkbox"+lista.id}></input>
                                <label class="form-check-label" for="flexRadioDefault1">{lista.titulo}</label>                               
                            </div>
                        ))}
                        </div>
                        <div class="modal-footer">
                            <button id="btn03_close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onClick={(e)=>this.deletelist()}>Borrar</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

const mapStateToProps=state=>({
    listas:state.listas,
})
const mapDispatchToProps=(dispatch)=>({
    deletelist:(idlista)=>{
        dispatch({
            type:'DELETE_LIST',
            payload:idlista,
        });
    }
})

const connected = connect(mapStateToProps,mapDispatchToProps)(Popupborrarlista)

export default connected;
