import React from 'react';
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });

        avatarRef.current.value = '';
    }

    return (
        <PopupWithForm
            name = 'change-avatar'
            title = 'Обновить аватар'
            isOpen = {props.isOpen}
            onClose = {props.onClose}
            onSubmit = {handleSubmit}
        >
            <input
                type="url"
                id='avatar-url-input'
                className="popup__input popup-change-avatar__input popup-change-avatar__input_link"
                placeholder="Ссылка на картинку"
                ref={avatarRef}
                required
            />
            <span
                id='avatar-url-input-error'
                className="url-input-error popup__input-error popup-change-avatar__input-error popup__input-error_hidden"
            />
        </PopupWithForm>
    );
}

export default EditAvatarPopup;