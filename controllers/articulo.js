'user strict'

const Articulo = require('../models/articulo')

function getArticulo (req, res) {
	let articuloId = req.params.articuloId

	Articulo.findById(articuloId, (err, articulo) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!articulo) return res.status(404).send({messade: `El articulo no existe`})

		res.status(200).send({ articulo }) // Bondad de Ecmascript6 product: product
	})	
}

function getArticulos (req, res) {
	Articulo.find({}, (err, articulos) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!articulos) return res.status(404).send({messade: `No hay articulos en la base de datos`})

		res.status(200).send({articulos})
	})	
}

function updateArticulo (req, res) {
	let articuloId = req.params.articuloId
	let update = req.body

	Articulo.findByIdAndUpdate(articuloId, update, (err, articuloUpdate) =>{
		if (err) return res.status(500).send({message: `Error al actualizar el articulo: ${err}`})

		res.status(200).send({articulo: articuloUpdate})
	})
}

function deleteArticulo (req, res) {
	let articuloId = req.params.articuloId

	Articulo.findById(articuloId, (err, articulo) => {
		if (err) return res.status(500).send({message: `Error al borrar el articulo: ${err}`})
		
		articulo.remove(err => {
			if (err) return res.status(500).send({message: `Error al borrar el articulo: ${err}`})
			res.status(200).send({ message: 'El articulo ha sido borrado.' })
		})
	})	
}

function saveArticulo (req, res) {
	console.log('POST')
	console.log(req.body.name)

	let articulo = new Articulo()
	articulo.name = req.body.name
	articulo.picture = req.body.picture
	articulo.category = req.body.category
	articulo.description = req.body.description

	articulo.save((err, articuloStored) => {
		if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

		res.status(200).send({articulo: articuloStored})
	})
}

module.exports = {
	getArticulo,
	getArticulos,
	updateArticulo,
	deleteArticulo,
	saveArticulo
}