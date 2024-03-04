import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
//import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Data Structure'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Algorithms'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'OOPS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Machine Learning'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Computer Vision'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'C++'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'75%'} width={'75%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Good knowledge of Front-end Web Development, using React Framework.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Worked on various projects deal with Data Processing. Have done projects in Computer Vision'}
                />
            </div>

        </div>
    )
}

export default AboutPage;
