const crypto = require('crypto');

const generarApiKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

module.exports = generarApiKey;
