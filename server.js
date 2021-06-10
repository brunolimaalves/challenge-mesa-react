const express = require('express')
const { resolve, path } = require('path')
const app = express()

app.use(express.static(path.join(__dirname, './dist')))
// app.use('/', express.static(
//     resolve(
//         __dirname , 
//         './build'
//     )
// ) )

app.listen( process.env.PORT || 3000 , error => {
    error ? console.log(error) : console.log('Server Up!')
})