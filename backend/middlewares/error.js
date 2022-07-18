const NotFound = require('../constants/NotFound');

module.exports.handleError = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка!' : message,
  });
  next();
};

module.exports.notFoundError = (req, res, next) => {
  next(new NotFound('Страницы не существует.'));
};
