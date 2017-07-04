'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = Schema({
	name: String,
	parent: { type: Schema.ObjectId, ref: 'Category' },

})

module.exports = mongoose.model('Category', CategorySchema)