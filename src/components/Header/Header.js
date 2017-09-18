import React, { Component } from 'react';
import './Header.css'


export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            input: ''        
        }
    }
    render() {
        return(
        <div>
            <div className='Homepage-img'>
                <div className='homepage-header'>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
                <div className='Search-div'>
                    <input type="list" placeholder='Enter Movie Title' value= { this.state.input } onChange= {(e) => {
                        this.setState({
                            input: e.target.value
                        })
                    }} />
                    <button onClick={() => {this.props.newMovie(this.state.input)}}>Search</button>
                </div>
            </div>
        )
    }
}