const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM detalhes_courses', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)
            
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        
        conn.query('INSERT INTO detalhes_courses set ?', [req.body],(err, rows) => {
        if (err) return res.send(err)
        res.send('courses added')

       })
    })
})






module.exports=routes