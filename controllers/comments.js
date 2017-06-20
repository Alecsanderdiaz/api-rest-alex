'user strict'

const Comment = require('../models/comments')

function saveComment (req, res) {
	// console.log('POST')
	// console.log(req.body.name)

	let comment = new Comment()
	comment.comment = req.body.comment
	comment.autor = req.body.autor
	comment.articulo = req.body.articulo

	comment.save((err,commentStored) => {
		if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

		res.status(200).send({comment: commentStored})
	})
}

module.exports = {
	saveComment
}