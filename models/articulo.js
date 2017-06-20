'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticuloSchema = Schema({
	name: String,
	picture: String,
	category: {type: String, enum: ['web', 'ios', 'android']},
	description: String
})

module.exports = mongoose.model('Articulo', ArticuloSchema)