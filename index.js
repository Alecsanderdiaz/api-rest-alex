'use strict' // Nuevas funcionalidades de Ecmascript 6, nuevos tipos de  variables, Buenas prácticas

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
	if (err) {
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('conexion a la base de datos establecida...')
	app.listen(config.port, () => {
		console.log(`API REST corriendo en http://localhost:${config.port}`) // El caracter ` lo encontre AltGr + "la tecla ñ+2 a la derecha"
	})

})