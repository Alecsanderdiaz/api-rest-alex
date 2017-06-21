'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Articulo = mongoose.model('Articulo')

const CommentSchema = Schema({
	comment: String,
	autor: String,
	articulo: { type: Schema.ObjectId, ref: "Articulo" }
})

module.exports = mongoose.model('Comment', CommentSchema)