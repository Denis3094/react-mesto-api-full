const usersRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { regExpLink } = require('../constants/regexp');
const {
  getMe, getUsers, getUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

usersRouter.get('/me', getMe);
usersRouter.get('/', getUsers);

usersRouter.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
}), getUser);

usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), updateUserProfile);

usersRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(regExpLink),
  }),
}), updateUserAvatar);

module.exports = usersRouter;
