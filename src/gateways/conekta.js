const express = require('express');
const router = express.Router();
const conekta = require('conekta-node');
conekta.api_key = process.env.CONEKTA_API_KEY;
conekta.locale = 'es';

router.post('/pago', async (req, res) => {
  const { cantidad, token } = req.body;
  const charge = await conekta.Order.create({
    currency: 'MXN',
    customer_info: {
      name: 'John Constantine',
      email: '  [email protected]',
    },
    amount: cantidad,
    source: token
  })
  return res.json(charge);
});

module.exports = router;
