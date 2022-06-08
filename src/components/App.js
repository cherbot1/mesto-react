import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});


    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

   return (
        <div className="App">
            <Header />

            <Main
                onEditAvatar = {handleEditAvatarClick}
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onCardClick = {handleCardClick}
            />

            <Footer />

            <PopupWithForm
                name = 'edit'
                title = 'Редактировать профиль'
                isOpen = {isEditProfilePopupOpen}
                onClose = {closeAllPopups}
            >
                <input
                    type="text"
                    id="name-input"
                    className="popup__input popup-edit__input popup__input_name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span
                    id="name-input-error"
                    className="name-input-error popup__input-error popup__input-error_hidden"/>
                <input
                    type="text"
                    id="about-input"
                    className="popup__input popup-edit__input popup__input_subtitle"
                    placeholder="О себе"
                    minLength="2"
                    maxLength="200"
                    required
                />
                <span
                    id="about-input-error"
                    className="about-input-error popup__input-error popup__input-error_hidden"
                />
            </PopupWithForm>

            <PopupWithForm
                name = 'add'
                title = 'Новое место'
                isOpen = {isAddPlacePopupOpen}
                onClose = {closeAllPopups}
            >
                <input
                    type="text"
                    id="place-name-input"
                    className="popup__input popup-add__input popup-add__input_name"
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    required
                />
                <span
                    id="place-name-input-error"
                    className="place-name-input-error popup__input-error popup__input-error_hidden"
                />
                <input
                    type="url"
                    id='url-input'
                    className="popup__input popup-add__input popup-add__input_link"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span
                    id='url-input-error'
                    className="url-input-error popup__input-error popup__input-error_hidden"
                />
            </PopupWithForm>

            <PopupWithForm
                name = 'change-avatar'
                title = 'Обновить аватар'
                isOpen = {isEditAvatarPopupOpen}
                onClose = {closeAllPopups}
            >
                <input
                    type="url"
                    id='avatar-url-input'
                    className="popup__input popup-change-avatar__input popup-change-avatar__input_link"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span
                    id='avatar-url-input-error'
                    className="url-input-error popup__input-error popup-change-avatar__input-error popup__input-error_hidden"
                />
            </PopupWithForm>

            <ImagePopup
                card = {selectedCard}
                onClose = {closeAllPopups}
            />
        </div>
  );
}

export default App;
