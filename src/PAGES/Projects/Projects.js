import React from 'react';
import ProjectItem from '../../components/ProjectItem';
import Aqua from "../../assets/aqua.png"
import Airplane from "../../assets/airplane.png"
import Business from "../../assets/business.png"
import Practise from "../../assets/practise.png"
import News from "../../assets/news.png"
import Notes from "../../assets/notes.png"
import Cosmetic from "../../assets/cosmetic.png"
// import {ProjectList} from '../../components/helpers/ProjectList'

import "./Projects.scss"

const Projects = () => {
    const handleClick = () => {
        window.location.replace("https://rushin-nemz.github.io/aquarium/bootstrap3.html");
    }
    const handleClickPlane = () => {
        window.location.replace("https://rushin-nemz.github.io/airplane/bootstrap2.html");
    }
    const handleClickBusiness = () => {
        window.location.replace("https://rushin-nemz.github.io/business/bootstrap.html");
    }
    const handleClickPract = () => {
        window.location.replace("https://rushin-nemz.github.io/practise/");
    }
    const handleClickNews = () => {
        window.location.replace("https://rushin-nemz.github.io/reactnewsapp/");
    }
    const handleClickNotes = () => {
        window.location.replace("https://rushin-nemz.github.io/iNotebook/");
    }
    const handleClickCosmetic = () => {
        window.location.replace("https://rushin-nemz.github.io/cosmetic/");
    }
    return (
        <div className='projects'>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
            <h1>My Projects</h1>
            </div>
            <div className='projectList'>
                <div onClick={handleClick}>
                    <ProjectItem name="Aquarium Webpage" image={Aqua} />
                </div>
                <div onClick={handleClickPlane}>
                    <ProjectItem name="Airplane Webpage" image={Airplane} />
                </div>
                <div onClick={handleClickBusiness}>
                    <ProjectItem name="Business Webpage" image={Business} />
                </div>
                <div onClick={handleClickPract}>
                    <ProjectItem name="Practise Webpage" image={Practise} />
                </div>
                <div onClick={handleClickNews}>
                    <ProjectItem name="News Application [ReactJS]" image={News} />
                </div>
                <div onClick={handleClickCosmetic}>
                    <ProjectItem name="Cosmetic Webpage" image={Cosmetic} />
                </div>
                <div onClick={handleClickNotes}>
                    <ProjectItem name="Application to store Notes (Backend Included)" image={Notes} />
                </div>

            </div>
        </div>
    )
}

export default Projects


