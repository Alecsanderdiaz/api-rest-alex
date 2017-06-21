'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticuloSchema = Schema({
	name: String,
	picture: String,
	category: { type: Schema.ObjectId, ref: "Category" },
	description: String
})

module.exports = mongoose.model('Articulo', ArticuloSchema)