import React, { Component } from 'react';
import Placeholder from './placeholder2.jpg'
import './Movie-Selection.css'


export default class MovieSelection extends Component {
    render(){
        return (
            <div>
                <div>
                    <img src={Placeholder} alt="placeholder" />
                </div>
                <div>
                    <img src={Placeholder} alt="placeholder" />
                </div>
                <div>
                    <img src={Placeholder} alt="placeholder" />
                </div>
                <div>
                    <img src={Placeholder} alt="placeholder" />
                </div>
                
            </div>
        )
    }
}