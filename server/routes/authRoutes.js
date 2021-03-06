const passport = require('passport');
const express = require('express');
const app = express();

module.exports = (app) => {
	app.get('/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	})

	app.get('/api/current_user', (req, res) => {
		console.log('found');
		res.send(req.user);
		console.log('2');
	});
}
