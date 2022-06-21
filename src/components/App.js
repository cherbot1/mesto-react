import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState('');

    React.useEffect(() => {
        api.getUserInfo().then((data) => {
            setCurrentUser(data);
        })
            .catch((err) => {
                console.log(err);
            });
    }, [])

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

    function handleUpdateUser(newData) {
        api.changeUserInfo(newData).then((data) => {
            setCurrentUser(data);
            closeAllPopups();
        })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleUpdateAvatar(newData) {
        api.changeAvatar(newData).then((data) => {
            setCurrentUser(data);
            closeAllPopups();
        })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
       <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Header />

                <Main
                    onEditAvatar = {handleEditAvatarClick}
                    onEditProfile = {handleEditProfileClick}
                    onAddPlace = {handleAddPlaceClick}
                    onCardClick = {handleCardClick}
                />

                <Footer />

                <EditProfilePopup
                    isOpen = {isEditProfilePopupOpen}
                    onClose = {closeAllPopups}
                    onUpdateUser = {handleUpdateUser}
                />

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

                <EditAvatarPopup
                    isOpen = {isEditAvatarPopupOpen}
                    onClose = {closeAllPopups}
                    onUpdateAvatar = {handleUpdateAvatar}
                />

                <ImagePopup
                    card = {selectedCard}
                    onClose = {closeAllPopups}
                />
            </div>
       </CurrentUserContext.Provider>
  );
}

export default App;
