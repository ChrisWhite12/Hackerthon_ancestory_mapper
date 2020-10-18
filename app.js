const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use( express.urlencoded( {extended: false }) )
app.use( express.json() )

// use means its a middle ware
app.use( (req, res, next) => {
    console.log('Middle-ware running.')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('listening on port:' + port)
})
