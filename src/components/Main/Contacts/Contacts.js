import React from 'react';
import './contacts.scss';

const Contacts = () => {
    return(
        <>
        <div className="main__head">
            <div className="contacts">
                <div className="contacts__title">Контакты</div>
                <div className="contacts__description">
                Местонахождение: г. Москва <br></br>
                Email: nikich201198@gmail.com <br></br>
                Телефон: +79032539925
                </div>
            </div>
        </div>
        </>
    )
}

export default Contacts;