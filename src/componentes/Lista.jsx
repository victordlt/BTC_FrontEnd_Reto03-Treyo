import React, {Component} from "react";
import {connect} from 'react-redux';

import  Card  from './Card';

class Lista extends Component {
    constructor(props){
        super(props);
        this.nombrelista=props.nombre;
        this.id=this.props.id;
    }

    insertcard(e){
        const listidactual= (this.id);
        console.log("la lista seleccionada es: "+listidactual);
        this.props.actuallistid(listidactual);
    }

    render(){
        // const sen;
        // if (true){
        //     sen=true;
        // }
        // else{sen=false}
        return(
            <div class="col" style={{marginBottom:35+'px'}}>
                <div style={{width:18 +'rem'}}>
                    <h3 style={{display:'inline'}}>{this.nombrelista}</h3>
                    <button style={{display:'inline', float:'right'}} type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#nuevatarea" data-bs-whatever="@mdo" onClick={(e)=>this.insertcard()}>+</button>
                </div>
                <div>  
                    {
                        //  (this.props.listas.find(lista=>lista.id==this.id)).tareas.map((tarea)=>(<Card nombretarjeta={tarea.titulo} descripciontarjeta={tarea.descripcion}/>))
                        
                         (this.props.listas.find(lista=>lista.id==this.id)).tareas.map((tarea)=>(<Card nombretarjeta={tarea.titulo} descripciontarjeta={tarea.descripcion}/>))


                        // this.props.listas.map(
                        //     (listac)=>{
                        //            if(listac.id==this.id){
                        //                 console.log("well done"+this.id) ;  
                        //                 listac.tareas.map((tarea)=>{
                        //                     console.log("la tarea es"+tarea.id);
                        //                     <Card nombretarjeta={tarea.titulo} descripciontarjeta={tarea.descripcion}/>
                        //                 })
                        //            }
                        //     }
                        // )
                    }                          
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>  ({
    listas:state.listas,
});

const mapDispatchToProps=(dispatch)=>({
    actuallistid:(texto)=>{
        console.log("Dispatch_ActualListId: "+texto);
        dispatch({
            type:'ACT_LISTID',
            payload:texto
        });
    }
})

const connected = connect(mapStateToProps,mapDispatchToProps)(Lista)
export default connected;
