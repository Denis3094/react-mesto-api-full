import { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__wrap">
          <div
            onClick={onEditAvatar}
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <button className="profile__avatar-edit-btn" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              className="button profile__button-edit"
              type="button"
              aria-label="редактировать"
            />
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className="button profile__button-add"
          type="button"
          aria-label="добавить"
        />
      </section>
      <section className="cards">
        <ul className="cards__items">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card._id}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main
