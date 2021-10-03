import React, {Component} from "react";
import  Card  from './Card';

class Lista extends Component {
    constructor(props){
        super(props);
        this.nombrelista="Listas";
    }

    insertcard(i){
        //document.getElementById("Lista").appendChild(<p>"Hi"</p>)
        /*'<span> Graph</span>'*/
        
        return <Card/>;
        // console.log ("hola mundo")
    }


    render(){       
        return(
            <div class="col" id={this.nombrelista}>
                <div style={{width:18 +'rem'}}>
                    <h3 style={{display:'inline'}}>{this.nombrelista}</h3>
                    <button style={{display:'inline', float:'right'}} type="button" class="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={this.insertcard}>+</button>
                </div>
                <div id="vic">{this.insertcard(0)}</div>
            </div>
        )
    }
}
export default Lista;