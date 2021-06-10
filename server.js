const express = require('express')
const {resolve} = require('path')
const app = express()

app.use('/', express.static('') )

app.listen( process.env.PORT || 3000 , error => {
    error ? console.log(error) : console.log('Server Up!')
})