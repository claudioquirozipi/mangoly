import * as React from 'react';
import styled from 'styled-components';

//Mango-Library
import {
    HeaderML,
    NavBarML
} from '../../mangoLy';

import {ButtonML} from '../../mangoLy';
//Assets
import img from '../../assets/img/img1.png';
import fondo from '../../assets/img/fondo.svg';
import logo from '../../assets/img/logo.svg';
import icon from '../img/img.svg';


const data = [
    {
        text: "hola1",
        function: () => alert("hola mundo 1")
    },
    {
        text: "hola2",
        function: () => alert("hola mundo 2")
    },{
        text: "hola3",
        function: () => alert("hola mundo 3")
    }
]

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
`;

const Nav = () => (<NavBarML  logoImg={logo} bgColor="blue">hola mundo </NavBarML>);

function Header() {
    return(
        <HeaderML
            headerImg={img} 
            bgImgM={fondo} 
            bgImgD={fondo}
            nav={<Nav />} 
        >
            <h1>hola mundo</h1>
            <p>pasdfadfadf</p>
            <ButtonContainer>
                <ButtonML curvature sm> <img src={icon} />boton </ButtonML>
                <ButtonML> <img src={icon} />boton </ButtonML>
                <ButtonML lg> <img src={icon} />boton </ButtonML>
            </ButtonContainer>
            <ButtonContainer>
                <ButtonML.Secundary sm color="white">boton </ButtonML.Secundary>
                <ButtonML.Secundary  >boton </ButtonML.Secundary>
                <ButtonML.Secundary lg>boton </ButtonML.Secundary>
            </ButtonContainer>
            <ButtonContainer>
                <ButtonML.Link sm href="/">boton </ButtonML.Link>
                <ButtonML.Link color="teal" href="/">boton </ButtonML.Link>
                <ButtonML.Link lg href="/">boton </ButtonML.Link>
            </ButtonContainer>
            <ButtonContainer>
                <ButtonML.DropDawn data={data} color="#6610f2" sm >boton </ButtonML.DropDawn>
                <ButtonML.DropDawn curvature color="teal" >boton </ButtonML.DropDawn>
                <ButtonML.DropDawn data={data} lg >boton </ButtonML.DropDawn>
            </ButtonContainer>
        </HeaderML>
    )
}

export default Header;