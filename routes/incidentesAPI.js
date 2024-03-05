var express = require('express');
var router = express.Router();
const modeloIncidente = require("../models/incidente");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { check, validationResult, body } = require('express-validator');

var usuario = "admin"
var clave = "adminpass"
var tokenfalso = "token_de_prueba"
var incidentes = new Array();
var contador = 0;

function init(){
  // Crear algunos incidentes de ejemplo
  let tempIncidente = new modeloIncidente.Incidente("Error de sistema", "Descripción detallada del error", new Date().toISOString().slice(0, 10));
  incidentes.push(tempIncidente);
  contador++;
  tempIncidente.Id = contador;
  
  tempIncidente = new modeloIncidente.Incidente("Fallo de seguridad", "Brecha detectada en el sistema", new Date().toISOString().slice(0, 10));
  incidentes.push(tempIncidente);
  contador++;
  tempIncidente.Id = contador;
  
  // ... Añadir más si es necesario
}

// Aquí iría la lógica para validar los campos de entrada y generar un token
router.post("/login", (req, res) => {
  // Implementar lógica de autenticación y retornar token
  return res.json(tokenfalso);
});

// Alta de un nuevo incidente, validar que se tienen permisos (enviar el token), comprobar los parámetros y desinfectar los mismos
router.post('/incidente', (req, res) => {
  // Crear nuevo incidente y añadir al array
  var incidente = new modeloIncidente.Incidente(req.body.titulo, req.body.descripcion, new Date().toISOString().slice(0, 10));
  incidentes.push(incidente);
  contador++;
  incidente.Id = contador;
  res.json(incidente);
});

router.delete('/incidente/:id', (req, res) => {
  // Borrar un incidente específico
  var longitudInicial = incidentes.length;
  incidentes = incidentes.filter(element => element.Id != parseInt(req.params.id));
  var longitudFinal = incidentes.length;
  res.json(longitudInicial - longitudFinal);
});

router.get('/incidentes', (req, res) => {
  // Retornar todos los incidentes
  res.json(incidentes);
});

// Datos de un incidente concreto, comprobar si se tienen permisos y que el parámetro es correcto.
router.get('/incidente/:id', (req, res) => {
  // Retornar un incidente específico por id
  var incidente = incidentes.find(element => element.Id == parseInt(req.params.id));
  if (!incidente) {
    res.status(404).json({ error: "No existe el incidente" });
  } else {
    res.json(incidente);
  }
});

// Alta de un nuevo reporte a un incidente, validar que se tienen permisos (enviar el token), comprobar los parámetros y desinfectar los mismos
router.post('/incidente/:id/reporte', (req, res) => {
  // Implementación para añadir un nuevo reporte a un incidente...
});

// Borrar un reporte, validar que se tienen permisos (enviar el token), comprobar los parámetros y desinfectar los mismos
router.delete('/incidente/:idIncidente/reporte/:id', (req, res) => {
  // Implementación para borrar un reporte...
});

// Obtener un reporte concreto.
router.get('/incidente/:idIncidente/reporte/:id', (req, res) => {
  // Implementación para obtener un reporte específico de un incidente...
});

module.exports = {router, init};