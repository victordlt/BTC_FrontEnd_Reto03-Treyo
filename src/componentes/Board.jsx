import React, {Component} from "react";
import Lista from './Lista';

class Board extends Component {
    constructor(props){
        super(props);
        this.nombrelistas="Tarjeta";
    }
    render(){     
        return(      
            <div id="colu" class="row" style={{marginTop:1 +'rem'}}>    
                <Lista></Lista>              
            </div>
        )
    }
}
export default Board;