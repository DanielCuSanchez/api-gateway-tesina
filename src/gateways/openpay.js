const express = require('express');
const router = express.Router();
const Openpay = require('openpay');
const openpay = new Openpay(process.env.OPENPAY_ID, process.env.OPENPAY_API_KEY);

router.post('/pago', async (req, res) => {
  // Implementa tu lógica de pago con OpenPay aquí.
});

module.exports = router;
