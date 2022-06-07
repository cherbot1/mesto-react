import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './index.css';
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

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
            save = 'Сохранить'
            isOpen = {isEditProfilePopupOpen}
            onClose = {closeAllPopups}
        >
            <input type="text" id="name-input" className="popup__input popup-edit__input popup__input_name"
                 placeholder="Имя" minLength="2" maxLength="40" required></input>
            <span id="name-input-error"
                className="name-input-error popup__input-error popup__input-error_hidden"></span>
            <input type="text" id="about-input"
                 className="popup__input popup-edit__input popup__input_subtitle"
                 placeholder="О себе" minLength="2" maxLength="200" required></input>
            <span id="about-input-error"
                className="about-input-error popup__input-error popup__input-error_hidden"></span>
        </PopupWithForm>

        <PopupWithForm
            name = 'add'
            title = 'Новое место'
            save = 'Сохранить'
            isOpen = {isAddPlacePopupOpen}
            onClose = {closeAllPopups}
        >
            <input type="text" id="place-name-input"
                   className="popup__input popup-add__input popup-add__input_name"
                   placeholder="Название" minLength="2" maxLength="30" required></input>
            <span id="place-name-input-error"
                  className="place-name-input-error popup__input-error popup__input-error_hidden"></span>
            <input type="url" id='url-input' className="popup__input popup-add__input popup-add__input_link"
                   placeholder="Ссылка на картинку" required></input>
            <span id='url-input-error'
                  className="url-input-error popup__input-error popup__input-error_hidden"></span>
        </PopupWithForm>

        <PopupWithForm
            name = 'change-avatar'
            title = 'Обновить аватар'
            save = 'Сохранить'
            isOpen = {isEditAvatarPopupOpen}
            onClose = {closeAllPopups}
        >
            <input type="url" id='avatar-url-input'
                   className="popup__input popup-change-avatar__input popup-change-avatar__input_link"
                   placeholder="Ссылка на картинку" required></input>
            <span id='avatar-url-input-error'
                  className="url-input-error popup__input-error popup-change-avatar__input-error popup__input-error_hidden"></span>
        </PopupWithForm>

        <ImagePopup
            card = {selectedCard}
            onClose = {closeAllPopups}
        />
    </div>
  );
}

export default App;
