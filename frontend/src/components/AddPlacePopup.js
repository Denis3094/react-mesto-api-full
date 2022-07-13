import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";
import ValidationMessage from "./ValidationMessage";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  isLoading,
  closeAllPopups,
  isValid,
  errorMessage,
}) {
  const [addPlaceName, setAddPlaceName] = useState("");
  const [addPlaceLink, setAddPlaceLink] = useState("");

  useEffect(() => {
    setAddPlaceName("");
    setAddPlaceLink("");
  }, [isOpen]);

  function handleChangeAddPlaceName(evt) {
    setAddPlaceName(evt.target.value);
  }

  function handleChangeAddPlaceLink(evt) {
    setAddPlaceLink(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    onAddPlace({
      name: addPlaceName,
      link: addPlaceLink,
    });
    setAddPlaceName("");
    setAddPlaceLink("");
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      buttonText={isLoading ? "Идет создание карточки..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
      isValid={isValid}
    >
      <input
        value={addPlaceName}
        onChange={handleChangeAddPlaceName}
        id="title"
        type="text"
        className="popup__input popup__input_type_title"
        placeholder="Название"
        name="name"
        required
        minLength={2}
        maxLength={30}
      />
      <ValidationMessage
        errorMessage={errorMessage}
        name="name"
      ></ValidationMessage>
      <input
        value={addPlaceLink}
        onChange={handleChangeAddPlaceLink}
        id="link"
        type="url"
        className="popup__input popup__input_type_link"
        placeholder="Ссылка на картинку"
        name="link"
        required
      />
      <ValidationMessage
        errorMessage={errorMessage}
        name="link"
      ></ValidationMessage>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
