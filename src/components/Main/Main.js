import React, { useRef } from 'react';
import './main.scss';
import logo from '../../img/logo_me.jpg';
import telegram from '../../img/telegram.png';
import whatsapp from '../../img/whatsapp.png';
import FetchData from '../../service/FetchData';
import UseTitle from '../Hooks/UseTitle';

import Contacts from './Contacts/Contacts';
import About from './About/About';
import Projects from './Projects/Projects';

import {useEffect, useState} from 'react';







const Main = (props) => {
   
    // const fetchData = new FetchData();

    // //const photoData;

    // fetchData.getPhoto().then( res => console.log(res));

    let [arrowState, setArrowState] = useState('visible')
       
    useEffect(() => {

            let block =  document.querySelector('.main__head');
            setTimeout(() => block.classList.add('transition'), 1) 
            setArrowState('visible')
        console.log('rend')
    }, [props.headtitle]);

    const oneRef = useRef(null);

    const scrollToComponent = () => {
        oneRef.current.scrollIntoView({behavior: 'smooth'})

    }
    
    // let arrow = document.querySelector('.arrow')
    // window.addEventListener('wheel', function (){
    //     if (arrow)  {setArrowState('hidden'); arrow.style.visibility = arrowState} 
    // })

    return (
     <>
     <div className="main"> 
        {props.headtitle === 'Home' && 
        <div className="main__view">
        <div className="main__head">
            <div className="main__title">Frontend-разработчик</div>
            <div className="main__high-area">
                <div className="logo">
                    <div className="main__logo">
                        <img className="telegram" src={telegram}></img>
                        <img className="whatsapp" src={whatsapp}></img>
                    </div>
                    <img className="main__img" onMouseOver={() => document.querySelector('.main__logo').classList.add('hover')} onMouseLeave={() => document.querySelector('.main__logo').classList.remove('hover')} src={logo}/>
                </div>
                <div className="main__description">Здравствуйте!<br></br>
    Меня зовут Никита, я frontend-разработчик. Ищу интересную работу, в которую смогу всецело погружаться и постоянно прогрессировать, используя актуальные технологии на данный момент.
                </div>
            </div>
            <div className="skills">
                <div className="skills-title">Мои навыки</div>
                <div className="skills-items">
                    <div className="skills__item" title="HTML"><img src="https://image.flaticon.com/icons/png/512/919/919827.png"></img></div>
                    <div className="skills__item" title="CSS"><img src="https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png"></img></div>
                    <div className="skills__item" title="Sass/SCSS"><img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.7) 20%, rgba(0,0,0,0) 70%)'}}></img></div>
                    <div className="skills__item" title="JavaScript"><img src="https://png.pngtree.com/svg/20170719/javascript_633988.png"></img></div>
                    <div className="skills__item" title="React"><img src="https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png" style={{height: '80px', width: '80px'}}></img></div>
                    <div className="skills__item" title="Redux"><img src="https://react-etc.net/files/2018-03/redux-harmful.png" style={{height: '80px', width: '80px'}}></img></div>
                    <div className="skills__item" title="jQuery"><img src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png"></img></div>
                    <div className="skills__item" title="Git/GitHub"><img src="https://i.pinimg.com/originals/43/4d/cf/434dcfe1acd79af48ddfc35292c31de5.png" style={{height: '60px', width: '60px'}}></img></div>
                    <div className="skills__item" title="Webpack"><img src="https://media.proglib.io/wp-uploads/2017/05/webpck.png" style={{width: '120px'}}></img></div>
                    <div className="skills__item" title="Gulp"><img src="https://img.icons8.com/windows/452/gulp.png"></img></div>
                    <div className="skills__item" title="Figma"><img src="https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR" alt="Figma" style={{width: '60px', height: '60px'}}></img></div>
                    <div className="skills__item"><img src="https://pngimg.com/uploads/photoshop/photoshop_PNG64.png" style={{width: '130px', height: '60px'}}></img></div>
                </div>
            </div>
            
        </div>
        <div className="main__arrow">
            <div className="arrow" style={{visibility: arrowState}} onClick={function() {
                // props.changeHeadtitle('About');
                document.querySelector('.arrow').style.visibility = "hidden";
                setArrowState('hidden'); 
                scrollToComponent()
        }}></div>
        </div>
        <About oneRef={oneRef}/>
        </div>
        }
        {props.headtitle === 'Projects' && <Projects projects = {props.projects}/>}
        {props.headtitle === 'Contacts' && <Contacts/>}
    </div>
    </>
    )
};

export default Main;