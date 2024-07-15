
const express = require('express');
const router = express.Router();

var getConnection = require('../conexion');


router.get('/usuario/:cedula', (req, res) => {
    getConnection(function(error, conn) {
        if (error) {
            res.sendStatus(400);
            return;
        }
        
        const { cedula } = req.params;
        conn.query('SELECT * FROM cliente WHERE cedula = ?', [cedula], function(error, rows) {
            if (error) {
                conn.release();
                res.status(400).send('No se ha podido obtener los datos');
                return;
            }
            res.send(rows);
        });
    });
});

module.exports = router;