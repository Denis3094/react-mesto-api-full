import PopupWithForm from "./PopupWithForm";

function DeleteConfirmPopup({
  isOpen,
  onClose,
  onDeleteCard,
  card,
  closeAllPopups,
}) {


  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete-confirm"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
    ></PopupWithForm>
  );
}

export default DeleteConfirmPopup;