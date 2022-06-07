import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup popup-image ${props.card.link ? 'popup_opened' : ''}`}>
            <div className="popup-image__wrapper">
                <button className="popup__close popup-image__close" type="button" aria-label="Закрыть"
                        title="Закрыть" onClick={props.onClose}></button>
                <img className="popup-image__image" src={props.card.link} alt={`${props.card.name}`}></img>
                <p className="popup-image__subtitle">{props.card.name}</p>
            </div>
        </section>
    );
}

export default ImagePopup;