const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/brag-aboutit', {
	useMongoClient: true
})

mongoose.Promise = Promise

module.exports = mongoose

const db = mongoose.connection

db.on('error', err => {
	console.log(err)
})

db.once('open', () => {
	console.log('you are connected!')
})
