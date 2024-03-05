// Puede que necesites ajustar la importación dependiendo de la estructura de tu proyecto
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gestión de Incidentes' }); // 'title' es la variable que `index.pug` espera
});

module.exports = router;