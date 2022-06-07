import React from 'react';
import edit from "../images/edit.png";
import editButton from "../images/Edit_Button.svg";
import plusButton from "../images/plus_button.svg";
import {api} from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const cloudUserInfo = api.getUserInfo();
        const cardsCloudInfo = api.getCardsInfo();

        cloudUserInfo.then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar)
        })
            .catch((err) => {
                console.log(err);
            });

        cardsCloudInfo.then((data) => {
            setCards(data);
        })
            .catch((err) => {
                console.log(err);
            });

    })

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__profile-info">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" src={userAvatar} alt="Аватар"></img>
                        <div className="profile__edit-background"></div>
                        <img className="profile__avatar-edit" src={edit} alt="Изменить" title="Изменить аватар"></img>
                    </div>
                    <div className="profile__profile-info-text">
                        <div className="profile__name-with-edit-button">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать"
                                    title="Редактировать" onClick={props.onEditProfile}>
                                <img src={editButton} className="profile__edit-button-image" alt="Редактировать"></img>
                            </button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>

                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить фото" title="Добавить фото" onClick={props.onAddPlace}>
                    <img className="profile__add-button-image" src={plusButton} alt="Добавить"></img>
                </button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            cardInfo = {card}
                            key = {card._id}
                            onCardClick = {props.onCardClick}
                        />
                        )
                    )}
                </ul>
            </section>

            <section className="popup popup-confirm">
                <form className="popup__form popup-confirm__form">
                    <button className="popup__close popup-confirm__close" type="button" aria-label="Закрыть"
                            title="Закрыть"></button>
                    <h2 className="popup-confirm__title">Вы уверены?</h2>
                    <button className="popup-confirm__button popup__save-button">Да</button>
                </form>
            </section>

        </main>
    );
}

export default Main;