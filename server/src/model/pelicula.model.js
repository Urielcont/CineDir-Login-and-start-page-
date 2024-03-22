const mongoose = require('mongoose')

const pelicula= new mongoose.Schema({
    titulo:{
        type:String
    },
    descripcion:{
        type:String
    }
})

const Peliculas= mongoose.model('Peliculas', pelicula)

module.exports= {Peliculas}