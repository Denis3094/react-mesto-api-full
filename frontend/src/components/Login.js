import { useState, useRef } from "react";
import useCheckButton from "../hooks/useCheckButton";
import ValidationMessage from "./ValidationMessage";

function Login({ onLogin, submitBtn, isValid, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef();
  const submitButton = useCheckButton(formRef.current, isValid);

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(password, email);
  }

  return (
    <section className="auth">
      <h2 className="auth__title">Вход</h2>
      <form
        ref={formRef}
        onChange={isValid}
        className="auth__form"
        onSubmit={handleSubmit}
      >
        <label className="auth__field">
          <input
            className="auth__input auth__input_type_email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
            value={email}
            minLength="5"
            maxLength="50"
            required
          />
          <ValidationMessage
            errorMessage={errorMessage}
            name="email"
          ></ValidationMessage>
        </label>
        <label className="auth__field">
          <input
            className="auth__input auth__input_type_password"
            type="password"
            placeholder="Пароль"
            name="password"
            onChange={handlePassword}
            value={password}
            minLength="5"
            maxLength="20"
            required
          />
          <ValidationMessage
            errorMessage={errorMessage}
            name="password"
          ></ValidationMessage>
        </label>
        <button
          type="submit"
          className={`auth__submit-button ${
            submitButton ? "" : "auth__submit-button_disabled"
          }`}
          disabled={!submitButton}
        >
          {submitBtn}
        </button>
      </form>
    </section>
  );
}

export default Login;
