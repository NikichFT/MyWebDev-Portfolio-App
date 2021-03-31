import React, {useState, useEffect} from 'react';
import './header.scss';
import {NavLink} from 'react-router-dom';
import UseTitle from '../Hooks/UseTitle';


const Header = (props) => {

 
    return (
     <>
     <div className="header">   
        <div className="header-home">
            <NavLink to='Home' activeStyle= {{color: 'aqua', boxShadow: 'rgba(10, 255, 255, 1) 5px 10px 30px', background: 'linear-gradient(173deg, rgba(0,255,248,0.196516106442577) 34%, rgba(14,250,243,0.4066001400560224) 100%)'}} onClick = {() => props.changeHeadtitle('Home')} className="header-home_link">Home</NavLink>
        </div>
        <div className="header-projects">
            <NavLink to='Projects' activeStyle= {{color: 'aqua', boxShadow: 'rgba(10, 255, 255, 1) 5px 10px 30px', background: 'linear-gradient(173deg, rgba(0,255,248,0.196516106442577) 34%, rgba(14,250,243,0.4066001400560224) 100%)'}} onClick = {() => props.changeHeadtitle('Projects')} className="header-projects_link">Projects</NavLink>
        </div>
        <div className="header-contacts">
            <NavLink to='Contacts' activeStyle= {{color: 'aqua', boxShadow: 'rgba(10, 255, 255, 1) 5px 10px 30px', background: 'linear-gradient(173deg, rgba(0,255,248,0.196516106442577) 34%, rgba(14,250,243,0.4066001400560224) 100%)'}} onClick = {() => props.changeHeadtitle('Contacts')} className="header-contacts_link">Contacts</NavLink>
        </div>
    </div>
    </>
    )
};

export default Header;