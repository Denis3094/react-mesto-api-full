const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { regExpLink } = require('../constants/regexp');
const Unauthorized = require('../constants/Unauthorized');

const userSchema = new mongoose.Schema({
  name: { // у пользователя есть имя — опишем требования к имени в схеме:
    type: String, // имя — это строка
    minlength: 2, // минимальная длина имени — 2 символа
    maxlength: 30, // а максимальная — 30 символов
    default: 'Your Name?',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'tell us about yourself',
  },
  avatar: {
    type: String,
    validate: {
      validator: (value) => regExpLink.test(value),
    },
    default: 'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?ixlib=rb-1.2.1',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  const authMessage = 'При авторизации переданы некорректные почта или пароль';
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Unauthorized(authMessage));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Unauthorized(authMessage));
          }
          return user;
        });
    });
};

module.exports.User = mongoose.model('user', userSchema);
