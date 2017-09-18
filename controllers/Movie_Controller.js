const api = require('../apikey')
const request = require('request');

let movies = [];


const controller = {

    findMovie: function( req, res, next ){
        const { id } = req.params;
        console.log(req.params)

        request(`https://api.themoviedb.org/3/movie/${id}?api_key=${api.api_key}`, function (error, response, body) {
        
            const val = JSON.parse(body)
            res.status(200).json(val)
          });
    },

    findMovieByTitle: function ( req, res, next ){
           let newVal = req.query.title.split(' ').join('%20')
          
        request(`https://api.themoviedb.org/3/search/movie?api_key=${api.api_key}&language=en-US&query=${newVal}&page=1&include_adult=false`, function(error, response, body){

          const val = JSON.parse(body)
          res.status(200).json(val)
        })
    }

}


module.exports = controller