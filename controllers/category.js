'user strict'

const Category = require('../models/category')

function saveCategory (req, res) {
	// console.log('POST')
	// console.log(req.body.name)

	let category = new Category()
	category.name = req.body.name

	category.save((err,categoryStored) => {
		if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

		res.status(200).send({category: categoryStored})
	})
}

module.exports = {
	saveCategory
}