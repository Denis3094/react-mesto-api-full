import {Link, Route, Switch} from "react-router-dom";
import {useState} from "react";


function Register({onRegister, submitBtn}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleEmail(evt) {
    setEmail(evt.target.value);
  }
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(password, email);
  }

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="auth__form" name="register">
        <label className="auth__field">
          <input
            className="auth__input auth__input_type_email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
            value={email}
            required
          />
          <span className="auth__input-error"></span>
        </label>
        <label className="auth__field">
          <input
            className="auth__input auth__input_type_password"
            type="password"
            placeholder="Пароль"
            name="password"
            onChange={handlePassword}
            value={password}
            required
          />
          <span className="auth__input-error"></span>
        </label>
        <button className="auth__submit-button" type="submit">
          {submitBtn}
        </button>
        <Switch>
          <Route>
            <Link to="/sign-in" className="auth__offer-link">
              <p className="auth__offer">Уже зарегистрированы? Войти</p>
            </Link>
          </Route>
        </Switch>
      </form>
    </section>
  );
}

export default Register;
