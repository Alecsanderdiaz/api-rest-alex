'use strict'

const express = require('express')
const articuloCtrl = require('../controllers/articulo')
const commentCtrl = require('../controllers/comment')
const categoryCtrl = require('../controllers/category')
const tagCtrl = require('../controllers/tag')
// const userCtrl = require('../controllers/user')
// const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/', articuloCtrl.index)
api.get('/articulo', articuloCtrl.getArticulos)
api.get('/articulo/:articuloId', articuloCtrl.getArticulo)
api.post('/articulo', articuloCtrl.saveArticulo)
api.put('/articulo/:articuloId', articuloCtrl.updateArticulo)
api.delete('/articulo/:articuloId', articuloCtrl.deleteArticulo)
// Comments
api.post('/articulo/:articuloId', commentCtrl.saveComment)
// Category
api.post('/category', categoryCtrl.saveCategory)
// Tag
api.post('/tag', tagCtrl.saveTag)
// api.post('/signup', userCtrl.signUp)
// api.post('/signin', userCtrl.signIn)
// api.get('/private', auth, (req, res) => {
//   res.status(200).send({ message: 'Tienes acceso' })
// })

module.exports = api