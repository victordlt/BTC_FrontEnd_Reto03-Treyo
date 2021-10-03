import React, {Component} from "react";
import bannerdog from '../img//01_01bannerDog.JPG';

class Card extends Component {
    constructor(props){
        super(props);
        this.nombrelistas="Tarjeta";
    }
    render(){     
        return(      
            <div class="card" style={{width:18 +'rem'}} >
                <img src={bannerdog} class="card-img-top" alt="LOGO"></img>
                <div class="card-body">
                <h5 class="card-title">Card title 1</h5>
                <p class="card-text">...</p>
                <a style={{float:'left', marginRight:5+'px'}} href="www.google.com" class="btn btn-primary"><i class="bi-trash"></i></a>
                <a style={{float:'left'}} href="www.google.com" class="btn btn-primary"><i class="bi-justify-left"></i></a>
                </div>
            </div>  
        )
    }
}
export default Card;