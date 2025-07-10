var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Aquí cambiamos la referencia al nuevo enrutador que hemos creado
var incidenciasRouter = require('./routes/incidenciasAPI');
var indexRouter = require('./routes/index');

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);



// Inicialización de la lista de incidencias
incidenciasRouter.init();

// Establecemos el prefijo '/api' para todas las rutas de la API de incidencias
app.use('/api', incidenciasRouter.router);

// Manejo de error 404 - Recurso no encontrado
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Configuración local, proporcionando error solo en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderización de la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;