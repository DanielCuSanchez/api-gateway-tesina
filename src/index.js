const express = require('express');
const morgan = require('morgan');
require('dotenv').config(); // Cargar variables de entorno
const verificarApiKey = require('./seguridad/auth');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(morgan('dev')); // Configura morgan para loguear todas las peticiones usando el formato predefinido 'dev'
app.use(verificarApiKey); // Middleware de autenticación basado en API key

// Importar rutas de las pasarelas de pago
const conektaRouter = require('./gateways/conekta');
const openpayRouter = require('./gateways/openpay');
const stripeRouter = require('./gateways/stripe');

// Usar rutas
app.use('/conekta', conektaRouter);
app.use('/openpay', openpayRouter);
app.use('/stripe', stripeRouter);

app.listen(port, () => {
  console.log(`API Gateway escuchando en http://localhost:${port}`);
});
