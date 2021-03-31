import React, { useEffect, useState } from 'react';
import './project-block.scss';

const ProjectBlock = ({projects}) => {

    let arr = ['', '_2', '_3', ''];
    let count = 0;

    // function changeImg() {
    // setInterval(()=>{
    //     count++;
    //     console.log(arr[count])
    //     return '/img/project-imgs/SpaceX-SPA'+arr[count]+'.png';
    //     }, 3000)
    // }

    return(
        <>
        
            <a key={projects.id} href={projects.html_url} className="project-block">
                <a className="project-block__title">{projects.name.split('-').join(' ')}</a>
                <img src={`/img/project-imgs/${projects.name}.png`} className="project-img" style={!projects.has_pages || projects.name === 'Andrew-game' ? {visibility: 'hidden'} : {visibility: 'visible'}}></img>
                <img className="project-img-alternate" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'></img>
            </a>
   
        </>
    )
};

export default ProjectBlock;