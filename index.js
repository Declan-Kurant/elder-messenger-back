const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema')

const Schema = require('./db/schema')
const Boast = Schema.Boast

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/boasts', (req, res) => {
	Boast.find()
		.then(boasts => {
			res.json(boasts)
		})
		.catch(err => {
			console.log(err)
		})
})

app.post('/boasts', (req, res) => {
	Boast.create(req.body)
		.then(boast => {
			console.log(boast)
			res.json(boast)
		})
		.catch(err => {
			console.log(err)
		})
})

app.delete('/boasts/:id', (req, res) => {
	Boast.findByIdAndRemove(req.params.id)
		.then(boast => {
			res.json(boast.txt_content)
		})
		.catch(err => {
			console.log(err)
		})
})

app.listen(process.env.PORT || 3001, function() {
	console.log('Express server is up and running on port 3001!')
})
