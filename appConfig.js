const PORT = process.env.PORT || 3000;
const PORT_YOGA = 4000;

module.exports = {
  PORT,
  HOST: process.env.HOST || `http://localhost:${PORT_YOGA}`,
};
