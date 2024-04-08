const express = require('express');
require('dotenv').config(); // Cargar variables de entorno
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Importar rutas de las pasarelas de pago
const conektaRouter = require('./gateways/conekta');
const openpayRouter = require('./gateways/openpay');
const stripeRouter = require('./gateways/stripe');

// Usar rutas
//app.use('/conekta', conektaRouter);
//app.use('/openpay', openpayRouter);
//app.use('/stripe', stripeRouter);

app.listen(port, () => {
  console.log(`API Gateway escuchando en http://localhost:${port}`);
});
