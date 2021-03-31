import React from 'react';
import './about.scss';

const About = (props) => {
    console.log(props.ref)
    return(
        <>
            <div className="about" ref={props.oneRef}>
                <div className="about__title">Обо мне</div>
                <div className="about__description">Я ищу интересную работу, в которую буду всецело погружаться и постоянно прогрессировать, используя актуальные на данный момент технологии. 
                Обладаю уверенными знаниями HTML, CSS, JavaScript(ES5, ES6 и более поздние), ReactJS(Hooks), Git/GitHub, jQuery, а также знаниями отзывчивой кроссбраузерной верстки, Figma, Adobe Photoshop, верстка по psd макетам, знаком с Bootstrap, Sass, Webpack, NodeJS, Gulp, ReactNative.Обладаю фундаментальными знаниями ООП. Уверенный пользователь MS Office.Хотел бы работать в вашей компании, улучшая свои навыки, получая опыт в решении новых интересных задач и развиваясь в данной области.
                </div>
            </div>
        </>
    )
};

export default About;