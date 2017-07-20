'use strict'

const express = require('express')
const bodyParser = require('body-parser')
var passport = require('passport')
var session = require('express-session')
// const hbs = require('express-handlebars')
const app = express()
const api = require('./routes/index')
const usuario = require('./routes/user')

var path = require('path')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.engine('.hbs', hbs({
//   defaultLayout: 'default',
//   extname: '.hbs'
// }))
// app.set('view engine', '.hbs')

require('./models/user');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({ secret: 'lollllo',
	resave: false,
    saveUninitialized: false 
}));

	app.use(passport.initialize());
	app.use(passport.session());

const configurePassport = require('./config/passport');
passport = configurePassport();

app.set("json spaces", 4)
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Ejemplo de Passport JS',
		user: req.user
	})
});



app.use('/api', api)
app.use('/user', usuario)
// app.get('/login', (req, res) => {
//   res.render('login')
// })
// app.get('/', (req, res) => {
//   res.render('product')
// })

module.exports = app