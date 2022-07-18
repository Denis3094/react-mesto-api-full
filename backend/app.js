require('dotenv').config();
const express = require('express');
const { mongoose } = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { login, createUser, logout } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { handleError, notFoundError } = require('./middlewares/error');
const { allowedCors } = require('./constants/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { validateAuthentication, validateUserBody, joiError } = require('./middlewares/validations');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(cors({
  origin: allowedCors,
  credentials: true,
}));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validateAuthentication, login);
app.post('/signup', validateUserBody, createUser);

app.use('/users', auth, usersRouter);
app.use('/cards', auth, cardsRouter);
app.post('/signout', auth, logout);
app.use('*', auth, notFoundError);

app.use(errorLogger);
app.use(joiError);
app.use(handleError);

app.listen(PORT, () => {
  console.log('app started', PORT);
});
