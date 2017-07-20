// Load the module dependencies
const passport = require('passport');
const url = require('url');
const FacebookStrategy = require('passport-facebook').Strategy;
const users = require('../../controllers/user');
const config = require('../../config')

// Create the Facebook strategy configuration method
module.exports = function() {
	// Use the Passport's Facebook strategy 
	passport.use(new FacebookStrategy({
			clientID: config.facebook.key,
			clientSecret: config.facebook.secret,
			callbackURL: config.facebook.callback,
			passReqToCallback: true
		},
		(req, accessToken, refreshToken, profile, done) => {
			// Set the user's provider data and include tokens
			const providerData = profile._json;
			providerData.accessToken = accessToken;
			providerData.refreshToken = refreshToken;

			// Create the user OAuth profile
			console.log(config.facebook.key)
			const providerUserProfile = {
				firstName: profile.name.givenName,
				lastName: profile.name.familyName,
				fullName: profile.displayName,
				email: profile.emails[0].value,
				username: profile.username,
				provider: 'facebook',
				providerId: profile.id,
				providerData: providerData
			};

			// Save the user OAuth profile
			users.saveOAuthUserProfile(req, providerUserProfile, done);
		}
	));
};