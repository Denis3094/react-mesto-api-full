import closeBtn from "../images/close.svg";
import useCloseEscape from "../hooks/useCloseEscape";
import scsAuthImg from "../images/success.svg";
import errAuthImg from "../images/error.svg";

function InfoTooltip({ isOpen, onClose, isSignup, signupError }) {

  useCloseEscape(isOpen, onClose)
  const img = isSignup ? scsAuthImg : errAuthImg;


  return (
    <section
      className={`popup popup_tooltip ${isOpen && "popup_opened"}`}
      onMouseDown={onClose}
    >
      <div
        className="popup__tooltip-container"
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <img className="popup__tooltip-img" src={img} alt={isSignup ? 'Успешно' : 'Ошибка авторизации'}/>
        <h2 className="popup__tooltip-message"> {isSignup ? 'Вы успешно зарегистрировались!' : `${signupError}.`}</h2>
        <button
          className="button popup__close popup__close_pic"
          type="button"
          aria-label="закрыть"
        >
          <img
            onClick={onClose}
            className="popup__close-img"
            src={closeBtn}
            alt="закрыть попап"
          />
        </button>
      </div>
    </section>
  );
}

export default InfoTooltip;
