import React, {Component} from "react";

import {connect} from 'react-redux';

import Lista from './Lista';

class Board extends Component {
    constructor(props){
        super(props);
        this.nombrelista="";
    }
    render(){     
        return(      
            <div id="colu" class="row" style={{marginTop:1 +'rem'}}> 
                {(this.props.listas.map((lista)=>(
                    <Lista nombre={lista.titulo} id={lista.id}></Lista>           
                    )))}
            </div>
        )
    }
}

const mapStateToProps = (state) =>  ({
    listas:state.listas,
    
});

const connected = connect(mapStateToProps)(Board)
export default connected;
