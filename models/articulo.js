'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const Tag = mongoose.model('Tag')
//var Tag = new Schema({ name: String });

const ArticuloSchema = Schema({
	name: String,
	picture: String,
	category: { type: Schema.ObjectId, ref: 'Category' },
	description: String,
	tags: [{ type: Schema.ObjectId, ref: 'Tag' }]
})

module.exports = mongoose.model('Articulo', ArticuloSchema)