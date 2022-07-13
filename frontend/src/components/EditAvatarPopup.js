import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";
import useCloseEscape from "../hooks/useCloseEscape";
import ValidationMessage from "./ValidationMessage";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading,
  closeAllPopups,
  errorMessage,
  isValid,
}) {
  const [avatarLink, setAvatarLink] = useState("");

  useCloseEscape(isOpen, closeAllPopups);

  useEffect(() => {
    setAvatarLink("");
  }, [isOpen]);

  function handleChangeAvatar(evt) {
    setAvatarLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarLink }, () => setAvatarLink(""));
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      buttonText={isLoading ? "Обновление аватара..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
      isValid={isValid}
    >
      <input
        onChange={handleChangeAvatar}
        value={avatarLink || ""}
        id="linkAvatar"
        type="url"
        className={`popup__input popup__input_type_link`}
        // className={`popup__input popup__input_type_link popup__input_type_error`}
        placeholder="Ссылка на картинку"
        name="avatarLink"
        required
      />
      <ValidationMessage errorMessage={errorMessage} name="avatarLink" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
