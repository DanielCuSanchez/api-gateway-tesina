const sistemasAutorizados = {
  sistemaA: process.env.API_KEY_SISTEMA_A,
  sistemaB: process.env.API_KEY_SISTEMA_B,
  sistemaC: process.env.API_KEY_SISTEMA_C
};

const verificarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ message: 'API key no proporcionada.' });
  }

  const autorizado = Object.values(sistemasAutorizados).includes(apiKey);

  if (!autorizado) {
    return res.status(403).json({ message: 'Acceso denegado: API key no válida.' });
  }

  next();
};

module.exports = verificarApiKey;
