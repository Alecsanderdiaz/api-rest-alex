'user strict'

const Tag = require('../models/tag')

function saveTag (req, res) {
	// console.log('POST')
	// console.log(req.body.name)

	let tag = new Tag()
	tag.name = req.body.name

	tag.save((err,tagStored) => {
		console.log(`Tag salvado: ${tag}`)
		if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

		res.status(200).send({tag: tagStored})
	})
}

module.exports = {
	saveTag
}