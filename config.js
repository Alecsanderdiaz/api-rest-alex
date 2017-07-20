module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/blog',
  SECRET_TOKEN: 'miclavedetokens',
  	twitter: {
		key: 'AfyNciwb9Sp2REniLlM1OA8U0',
		secret: 'aHUAOHPqpiKxtX1uDxlAD4cb26X4CWHoeyyTC2TzxCVd5TEEso',
		callback: '/user/oauth/twitter/callback'
	},
	facebook: {
		key: '119296958680618',
		secret: '2955e9df20333315579c9c8857f4896a',
		callback: '/user/oauth/facebook/callback'
	}
}