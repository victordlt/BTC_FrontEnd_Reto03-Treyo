import React, {Component} from "react";

class Barmenu extends Component {
    constructor(props){
        super(props);
        this.nombrelistas="Tarjeta";
    }
    render(){     
        return(      
            <div class="row">
                <div class="col">
                    <button style={{marginRight:2+'px'}} type="button" class="btn btn-primary" data-bs-target="#exampleModal2" data-bs-whatever="@mdo" data-bs-toggle="modal">Crear Lista</button>
                    <button style={{marginLeft:2+'px'}} type="button" class="btn btn-primary" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Borrar Lista</button>
                </div>
            </div> 
        )
    }
}
export default Barmenu;