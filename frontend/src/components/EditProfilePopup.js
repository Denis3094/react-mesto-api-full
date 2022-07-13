import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ValidationMessage from "./ValidationMessage";

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
  closeAllPopups,
  isValid,
  errorMessage,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.

  useEffect(() => {
    // setName(currentUser.name);
    // setDescription(currentUser.about);
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      buttonText={isLoading ? "Идет сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
      isValid={isValid}
    >
      <input
        defaultValue={name}
        onChange={handleChangeName}
        id="username"
        type="text"
        minLength="2"
        maxLength="50"
        // className={`popup__input popup__input_type_name popup__input_type_error`}
        className={`popup__input popup__input_type_name`}
        placeholder="Имя"
        name="name"
        required
      />
      <ValidationMessage errorMessage={errorMessage} name="name"></ValidationMessage>
      <input
        defaultValue={description}
        onChange={handleChangeDescription}
        id="about"
        type="text"
        minLength="2"
        maxLength="50"
        className={`popup__input popup__input_type_job`}
        placeholder="О себе"
        name="aboutMe"
        required
      />
      <ValidationMessage errorMessage={errorMessage} name="aboutMe"></ValidationMessage>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
