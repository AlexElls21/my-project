import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import Header from './components/Header/Header'
import MainMovie from './components/mainMovie/mainMovie'
// import MovieSelection from './components/Movie-Selection/Movie-Selection';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movieOfTheDay: Math.floor((Math.random() * 2000) + 1),
      movieSearchedFor: '',
      movieTitle: '',
      movieOverview: '',
      poster: '',
      rating: '',
      
    }
    this.addMovie = this.addMovie.bind(this)
  }

  componentDidMount(){
      axios.get(`http://localhost:3033/api/movies/${this.state.movieOfTheDay}`).then( res => {
        console.log(res)
      this.setState ({
        movieTitle: res.data.original_title,
        movieOverview: res.data.overview,
        poster: res.data.poster_path,
        rating: res.data.vote_average
      })
    })
  }

  addMovie(val){
    axios.get(`http://localhost:3033/api/movie?title=${val}`).then(res => {
      this.setState ({
        movieTitle: res.data.results[0].original_title,
        movieOverview: res.data.results[0].overview,
        poster: res.data.results[0].poster_path,
        rating: res.data.results[0].vote_average
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.movieTitle}
                newMovie={this.addMovie} />
        <MainMovie overview={this.state.movieOverview}
                    poster={this.state.poster}
                    rating={this.state.rating} />
      </div>
    );
  }
}

export default App;
