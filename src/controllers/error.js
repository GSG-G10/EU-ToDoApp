const { join } = require('path');

const clientError = (req, res) => {
  res.status(404);
  res.sendFile(join(__dirname, '..', '..', 'public', '404.html'));
};
const serverError = (err, req, res, next) => {
  res.status(500);
  res.sendFile(join(__dirname, '..', '..', 'public', '500.html'));
  next();
};

module.exports = {
  clientError,
  serverError,
};
