import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  // Обработчик клика
  const handleClick = () => {
    onCardClick(card);
  };

  // Обработчик лайка
  const handleLikeClick = () => {
    onCardLike(card);
  };

  // Обработчик удаления карточки
  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = (card.owner._id || card.owner) === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `button cards__button-remove ${
    isOwn ? "cards__button-remove_visible" : "cards__button-remove_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((like) => like === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `button cards__button-like ${
    isLiked ? "cards__button-like_active" : ""
  }`;

  return (
    <li className="cards__item" id={card._id}>
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
        type="button"
        aria-label="удалить"
      />
      <img
        onClick={handleClick}
        className="cards__img"
        src={card.link}
        alt={card.name}
      />
      <div className="cards__desc">
        <h2 className="cards__title">{card.name}</h2>
        <div className="like-wrapper">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="нравится"
          />
          <span className="cards__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
