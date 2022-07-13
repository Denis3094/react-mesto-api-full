import closeBtn from "../images/close.svg";
import useCloseEscape from "../hooks/useCloseEscape";
import { useRef } from "react";
import useCheckButton from "../hooks/useCheckButton";

function PopupWithForm({
  name,
  title,
  buttonText,
  onSubmit,
  isOpen,
  onClose,
  children,
  closeAllPopups,
  isValid,
}) {
  const formRef = useRef();

  const submitButton = useCheckButton(formRef.current, isValid);
  useCloseEscape(isOpen, closeAllPopups);

  return (
    <section
      className={`popup popup_${name} ${isOpen && "popup_opened"}`}
      onMouseDown={onClose}
    >
      <div
        className="popup__container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          className="button popup__close"
          type="button"
          aria-label="закрыть"
        >
          <img
            className="popup__close-img"
            src={closeBtn}
            alt="закрыть попап"
            onClick={onClose}
          />
        </button>
        <h2 className="popup__title">{title}</h2>
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="popup__form"
          name={name}
          method="post"
          noValidate
          onChange={isValid}
        >
          {children}
          <button
            className={`popup__button ${
              submitButton ? "" : "popup__button_disabled"
            }`}
            type="submit"
            aria-label="сохранить"
            disabled={!submitButton}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
