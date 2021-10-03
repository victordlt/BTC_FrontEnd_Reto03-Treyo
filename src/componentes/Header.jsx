import React, {Component} from "react";

class Header extends Component {
    constructor(props){
        super(props);
        this.nombrelistas="Tarjeta";
    }
    render(){     
        return(      
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
            

        )
    }
}
export default Header;