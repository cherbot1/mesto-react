import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup-${props.name}__container`}>
                <button
                    className={`popup__close popup-${props.name}__close`}
                    type="button"
                    aria-label="Закрыть"
                    title="Закрыть"
                    onClick={props.onClose}
                />
                <form
                    name={`${props.name}_form`}
                    className={`popup__form popup-${props.name}__form`}
                    onSubmit={props.onSubmit}
                    noValidate
                >
                    <h2 className={`popup__title popup-${props.name}__title`}>{props.title}</h2>
                    {props.children}
                    <button
                        type="submit"
                        aria-label='Сохранить'
                        className="popup__save-button popup-edit__save-button"
                    >Сохранить</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;