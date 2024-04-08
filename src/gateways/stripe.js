const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

router.post('/pago', async (req, res) => {
  

});

module.exports = router;
