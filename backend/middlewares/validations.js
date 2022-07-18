const { celebrate, Joi, errors} = require('celebrate');
const { regExpLink } = require('../constants/regexp');

module.exports.validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(regExpLink),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.joiError = errors({ message: 'Переданы некорректные данные.' });
