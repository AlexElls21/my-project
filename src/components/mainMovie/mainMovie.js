import React, { Component } from 'react';
import './Main-Movie.css'
import MovieImg from './Main-MovieComponents/Movie-img'


export default function MainMovie(props) {
  

        return(
            <div className='hero'>
                <div className='movie-img'>
                    <img src={'http://image.tmdb.org/t/p/w185//' + props.poster} alt="" />
                </div>
                <h3 className='rating'>
                    Rating: {props.rating}/10
                </h3>
                <h2 className='movie-overview'>
                    {props.overview}
                </h2>
            </div>
        )
    }
