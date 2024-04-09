const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

router.post('/pago', async (req, res) => {
  const { cantidad, token } = req.body;
  const charge = await stripe.charges.create({
    amount: cantidad,
    currency: 'mxn',
    description: 'Ejemplo de pago con Stripe',
    source: token,
  });
  return res.json("charge"); // Regresa el cargo de Stripe como respuesta
});

module.exports = router;
