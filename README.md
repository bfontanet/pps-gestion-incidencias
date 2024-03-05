# Gestión de Incidencias - Proyecto de Puesta en Producción Segura

Este proyecto sirve como base para una práctica del módulo de Puesta en Producción Segura (Ciberseguridad), donde los alumnos deben implementar aspectos de seguridad en una API de gestión de incidencias.

## Aspectos de Seguridad a Implementar

- **Validación de Datos de Entrada**: Asegurar que todos los datos ingresados por los usuarios son válidos y sanearlos para prevenir inyecciones SQL y ataques XSS.
- **Protección contra SQL Injection**: Utilizar consultas preparadas o un ORM que evite la inyección de SQL al interactuar con la base de datos.
- **Autenticación y Autorización**: Utilizar JWT para manejar la sesión de los usuarios, asegurando que solo los usuarios autenticados puedan acceder a las funcionalidades de la aplicación.
- **Almacenamiento Seguro de Contraseñas**: Implementar hash de contraseñas utilizando técnicas de sal y pimienta para el registro y autenticación de usuarios.

## Instrucciones para Clonar y Ejecutar el Proyecto en Local

Antes de comenzar, asegúrate de tener instalado Node.js en tu equipo. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

1. Clona este repositorio en tu máquina local utilizando el siguiente comando en tu terminal:

  git clone https://github.com/bfontanet/pps-gestion-incidencias.git

2. Navega hasta el directorio del proyecto:

  cd pps-gestion-incidencias

3. Instala las dependencias del proyecto ejecutando el siguiente comando:

  npm install

4. Una vez completada la instalación, puedes iniciar el servidor local ejecutando:

  npm start

5. El servidor estará disponible en el puerto 3333. Puedes acceder a la aplicación desde tu navegador web visitando la siguiente URL:

  http://localhost:3333

¡Listo! Ahora puedes explorar y probar la aplicación en tu entorno local.
