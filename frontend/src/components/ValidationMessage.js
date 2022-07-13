function ValidationMessage({ errorMessage, name }) {
  return (
    <span
      className={`popup__error ${
        errorMessage[name] ? "popup__error_visible" : ""
      }`}
    >
      {errorMessage[name]}
    </span>
  );
}

export default ValidationMessage;