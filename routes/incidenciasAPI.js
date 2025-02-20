var express = require('express');
var router = express.Router();
const modeloIncidencia = require("../models/incidencia");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { check, validationResult, body } = require('express-validator');

var usuario = "admin"
var clave = "adminpass"
var tokenfalso = "token_de_prueba"
var incidencias = new Array();
var contador = 0;

function init(){
  // He creado dos incidencias de ejemplo emulando que se han cargado de una base de datos
  let tempIncidencia = new modeloIncidencia.Incidencia("Error de sistema", "Descripción detallada del error", new Date().toISOString().slice(0, 10));
  incidencias.push(tempIncidencia);
  
  tempIncidencia = new modeloIncidencia.Incidencia("Fallo de seguridad", "Brecha detectada en el sistema", new Date().toISOString().slice(0, 10));
  incidencias.push(tempIncidencia);
  
  // ... Añadir más si es necesario
}

// Aquí iría la lógica para validar los campos de entrada y generar un token
router.post("/login", (req, res) => {
  // Implementar lógica de autenticación y retornar token
  return res.json(tokenfalso);
});

// Alta de un nueva incidencia, validar que se tienen permisos (enviar el token), comprobar los parámetros y desinfectar los mismos
router.post('/incidencia', (req, res) => {
  // Crear nueva incidencia y añadir al array
  var incidencia = new modeloIncidencia.Incidencia(req.body.titulo, req.body.descripcion, new Date().toISOString().slice(0, 10));
  incidencias.push(incidencia);
  res.json(incidencia);
});

router.delete('/incidencia/:id', (req, res) => {
  // Borrar una incidencia específico
  var longitudInicial = incidencias.length;
  incidencias = incidencias.filter(element => element.id != parseInt(req.params.id));
  var longitudFinal = incidencias.length;
  res.json(longitudInicial - longitudFinal);
});

router.get('/incidencias', (req, res) => {
  // Retornar todos los incidencias
  res.json(incidencias);
});

// Datos de un incidencia concreto, comprobar si se tienen permisos y que el parámetro es correcto.
router.get('/incidencia/:id', (req, res) => {
  // Retornar una incidencia específico por id
  var incidencia = incidencias.find(element => element.id == parseInt(req.params.id));
  if (!incidencia) {
    res.status(404).json({ error: "No existe el incidencia" });
  } else {
    res.json(incidencia);
  }
});

// Alta de un nuevo informe a un incidencia, validar que se tienen permisos (enviar el token), comprobar los parámetros y desinfectar los mismos
router.post('/incidencia/:id/informe', (req, res) => {
  // Implementación para añadir un nuevo informe a una incidencia...
});

// Borrar un informe, validar que se tienen permisos (enviar el token), comprobar los parámetros y desinfectar los mismos
router.delete('/incidencia/:idIncidencia/informe/:id', (req, res) => {
  // Implementación para borrar un informe...
});

// Obtener un informe concreto.
router.get('/incidencia/:idIncidencia/informe/:id', (req, res) => {
  // Implementación para obtener un informe específico de una incidencia...
});

module.exports = {router, init};