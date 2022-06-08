import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.cardInfo);
    }

    return (
        <li className="element">
            <button
                type="button"
                className="element__delete-button"
                aria-label="Удалить"
                title="Удалить"
            />
            <figure className="element__figure">
                <div className="element__image-wrapper">
                    <img
                        className="element__image"
                        src={props.cardInfo.link}
                        alt={props.cardInfo.name}
                        onClick={handleClick}
                    />
                </div>
                <figcaption className="element__figcaption">
                    <h2 className="element__figcaption-text">{props.cardInfo.name}</h2>
                    <div className="element__like-section">
                        <button
                            type="button"
                            className="element__like-button"
                            aria-label="Нравится"
                            title="Нравится"
                        />
                        <p className="element__like-counter">{props.cardInfo.likes.length}</p>
                    </div>
                </figcaption>
            </figure>
        </li>
    );
}

export default Card;