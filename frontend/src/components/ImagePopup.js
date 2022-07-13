import closeBtn from "../images/close.svg";
import useCloseEscape from "../hooks/useCloseEscape";

function ImagePopup({card, isOpen, onClose, closeAllPopups}) {

    useCloseEscape(isOpen, closeAllPopups)

    return (
        <section className={`popup popup_theme_dark popup_pic ${isOpen && " popup_opened"}`} onMouseDown={onClose}>
            <div className="popup__pic-container" onMouseDown={(evt) => evt.stopPropagation()}>
                <button className="button popup__close popup__close_pic" type="button" aria-label="закрыть">
                    <img onClick={onClose} className="popup__close-img" src={closeBtn} alt="закрыть попап"/>
                </button>
                <img className="popup__photo" src={card.link} alt={card.name}/>
                <p className="popup__photo-title">{card.name}</p>
            </div>
        </section>
    )
}

export default ImagePopup