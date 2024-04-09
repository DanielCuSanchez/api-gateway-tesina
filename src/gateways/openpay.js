const express = require('express');
const router = express.Router();
const Openpay = require('openpay');
const openpay = new Openpay(process.env.OPENPAY_ID, process.env.OPENPAY_API_KEY);

router.post('/pago', async (req, res) => {
  const { cantidad, token } = req.body;
  const chargeRequest = {
    method: 'card',
    source_id: token,
    amount: cantidad,
    description: 'Ejemplo de pago con Openpay',
    device_session_id: 'kR1MiQhz2otdIuUlQkbEyitIqVMiI16f'
  };
  openpay.charges.create(chargeRequest, (error, charge) => {
    if (error) {
      return res.status(400).json({ error: error.description });
    }
    return res.json(charge);
  });
});

module.exports = router;
