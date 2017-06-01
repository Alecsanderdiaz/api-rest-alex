'use strict'

const services = require('../services')

function isAuth (req, res, next) {
  console.log("Estoy en la funcion isauth")
  if (!req.headers.authorization) {
  	console.log("entre a una fucking mierda")
    return res.status(403).send({ message: 'No tienes fucking autorización' })
  }

  const token = req.headers.authorization.split(' ')[1]

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isAuth