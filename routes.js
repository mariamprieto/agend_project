const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM directory', (err, rows) => {
            if (err) return res.send(err)
            res.send(rows)

        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO directory set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)

            res.send('directory added')

        })
    })
})


routes.delete('/:idCourse', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM directory WHERE id= ?', [req.params.idCourse], (err, rows) => {
            if (err) return res.send(err)

            res.send('directory delete')

        })
    })
})

routes.put('/:idCourse', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE directory set ? WHERE id= ?', [req.body,req.params.idCourse], (err, rows) => {
            if (err) return res.send(err)

            res.send('directory update')

        })
    })
})





module.exports = routes