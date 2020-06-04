import React, { useState, useEffect } from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData, { getEducations, getExperiences, getSkills, getSocial } from '../hooks/useGetData';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #eaeaea;
        position:absolute; 
        display:block; 
        height:100%; 
        width:100%; 
        top:0px; 
        left:0px; 
        z-index:-1;   
    }
    #app{
        height: 100%;
    }
`
// 303030 Negro Fondo
// #ebbd08 Amarillo 
// #fd4b49 Rojo 
// #5998df Azul 
// #e7e7e5 blanco 

const App = () => {

    const data = useGetData();
    data.educations = getEducations();
    data.experiences = getExperiences();
    data.skills = getSkills();
    data.social = getSocial();

    console.log(data);
    // console.log(educations);

    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}
                />
            </Sidebar>
            <Info>
                <Education 
                    data={data.educations}
                />
                <Experience
                    data={data.experiences}
                />
                {/* <Certificates
                    data={data.certificate}
                /> */}
                <Skills
                    data= {data.skills}
                />
            </Info>
        </Main>
    );
}

export default App;