const express = require('express');
const router = express.Router();
const conekta = require('conekta-node');
conekta.api_key = process.env.CONEKTA_API_KEY;
conekta.locale = 'es';

router.post('/pago', async (req, res) => {
  // Implementa tu lógica de pago con Conekta aquí.
  // Usa los datos de `req.body` para crear un cargo.
  
});

module.exports = router;
