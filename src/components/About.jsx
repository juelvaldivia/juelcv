// se importan librerías incluyendo React
import React from 'react';
import Social from './Social';
import styled from 'styled-components';

// 141415 Negro Fondo
// #ebbd08 Amarillo 
// #fd4b49 Rojo 
// #5998df Azul 
// #e7e7e5 blanco 

const AboutStyle = styled.div`
    text-align: center;
    background-color: #141415;
    height: 100%;
`
const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`
const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #eaeaea;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`
const AboutName = styled.div`
    text-align: center;
`
const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #e7e7e5;
`
const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #e7e7e5;
`
const AboutBio = styled.p`
    color: #e7e7e5;
    font-size: 1em;
    font-weight: 300;
    padding:5px 10px 5px 10px;
    text-indent:15px;
    text-align: center;
`
const AboutLocation = styled.p`
    color: #e7e7e5;
    font-size: 1em;
    font-weight: 300;
`
const AboutDesc = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

const LocationIcon = styled.i`
    color: #fd4b49
`
// Componente About el cual contiene información Personal
const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
        <div className='About-container'>
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt= '' />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className='About-profession'>
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <AboutDesc>
                <AboutBio>{bio}</AboutBio>
            </AboutDesc>
            <div className='About-location'>
                <AboutLocation>
                    <LocationIcon className="fa fa-map-marker"></LocationIcon> {address}
                </AboutLocation>
            </div>
            <div className='About-social'>
                <Social
                social={social}
                />
            </div>
        </div>
    </AboutStyle>
);

export default About;
