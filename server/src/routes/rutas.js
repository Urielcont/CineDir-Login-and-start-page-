const express = require("express");
const controladorPeliculas = require('../controller/peliculas.controller')
const router =express.Router();


router.get('/Datos',controladorPeliculas.MostrarDatos)
router.post('/Agregar',controladorPeliculas.agregarDato)

module.exports= router
