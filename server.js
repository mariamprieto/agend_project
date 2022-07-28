const express = require('express')
const app = express()
const mysql = require('mysql2')
const myconn=require('express-myconnection')
const routes =require('./routes')

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'abc123',
    database: 'escola',
}

//middlewares--------------------------
app.use(myconn(mysql,dbOptions, 'single'))

//routes--------------------------------
app.get('/', (req, res) => {
    res.send('working')
})

app.use('/api',routes)
//server running-------------------------
app.listen(app.get ('port'), () => {
    console.log('server running on port',app.get('port'))
})