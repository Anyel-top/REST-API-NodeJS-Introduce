
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

router.post('cliente/', (req, res, next)=>{
    const data = {
        nombre: req.body.nombre, 
        cedula: req.body.cedula, 
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        correo: req.body.correo
    }

    const query = "INSERT INTO cliente (nombre, cedula, telefono, direccion, correo) values 

})

module.exports = router;