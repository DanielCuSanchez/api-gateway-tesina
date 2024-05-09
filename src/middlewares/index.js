const stripe = require('stripe')(process.env.STRIPE_API_KEY);

// Verifica si Stripe está correctamente inicializado
const stripeInit = (req, res, next) => {
  if (!stripe) {
    return res.status(500).json({ message: 'Fallo al inicializar Stripe.' });
  }
  req.stripe = stripe;
  next();
};

// Valida los campos necesarios para una transacción con Stripe
const validarCamposStripe = (req, res, next) => {
  const { cantidad, token } = req.body;

  if (!cantidad || cantidad <= 0) {
    return res.status(400).json({ message: 'La cantidad debe ser un número positivo.' });
  }

  if (!token) {
    return res.status(400).json({ message: 'El token de pago es requerido.' });
  }

  next();
};

module.exports = { stripeInit, validarCamposStripe };



