// Load the module dependencies
const users = require('../controllers/user');
const passport = require('passport');
const express = require('express')

const user = express.Router()
	// Set up the 'signup' routes 
    user.post('/signup', users.signup);

    // Set up the 'signin' routes 
    user.post('/signin', users.signin);

    // Set up the 'signout' route
    user.get('/signout', users.signout);

	// Set up the Facebook OAuth routes 
	user.get('/oauth/facebook', passport.authenticate('facebook', {
		failureRedirect: '/signin'
	}));
	user.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	// Set up the Twitter OAuth routes 
	user.get('/oauth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}));
	user.get('/oauth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	// Set up the Google OAuth routes 
	user.get('/oauth/google', passport.authenticate('google', {
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		],
		failureRedirect: '/signin'
	}));
	user.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

module.exports = user