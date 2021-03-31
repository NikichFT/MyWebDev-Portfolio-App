import React from 'react';
import './projects.scss';

import ProjectBlock from './ProjectBlock/ProjectBlock';

const Projects = (props) => {

//    let ids = props.projects.map(el => {
//         return el
//     })

//     console.log(ids)

    let projs = props.projects.sort((prev, next) => {
        return next.id-prev.id
    })

    return(
        <>
        <div className="main__head">
            <div className="projects-title">Мои проекты</div>
            <div className="projects">
                { projs.map((item) => 
                    (<ProjectBlock projects = {item}/>)
                )}
            </div>
        </div>    
        </>
    )
};

export default Projects;