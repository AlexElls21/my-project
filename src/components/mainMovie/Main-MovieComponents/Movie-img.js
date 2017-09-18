import React, { Component } from 'react';
import PlaceHolder from './poster-placeholder.png'



export default class MovieImg extends Component {
    render(){
        return(
        <div>
            <img src={PlaceHolder} alt="" />
        </div>
        )
    }
}