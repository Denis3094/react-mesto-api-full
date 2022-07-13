const cardsRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { regExpLink } = require('../constants/regexp');
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const handlerValidation = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});

cardsRouter.get('/', getCards);

cardsRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(regExpLink),
  }),
}), createCard);

cardsRouter.delete('/:cardId', handlerValidation, deleteCard);

cardsRouter.put('/:cardId/likes', handlerValidation, likeCard);

cardsRouter.delete('/:cardId/likes', handlerValidation, dislikeCard);

module.exports = cardsRouter;
