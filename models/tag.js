'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagSchema = Schema({
	name: String
})

module.exports = mongoose.model('Tag', TagSchema)