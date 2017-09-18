const express = require('express');
const bodyParser = require('body-parser');


const movieController = require('./controllers/Movie_Controller')


let app = express();
app.use(bodyParser.json());





//MIDDLEWARES

app.get('/api/movies/:id', movieController.findMovie)

app.get('/api/movie', movieController.findMovieByTitle)


let port = 3033;

app.listen(port, () => {
    console.log('It is working! '+ port)
})