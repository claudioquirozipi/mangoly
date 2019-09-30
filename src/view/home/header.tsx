import * as React from 'react';

//Mango-Library
import HeaderML1 from '../../mangoLy/header/header1';
import NavML1 from '../../mangoLy/navbar/nav1';
//Assets
import img from '../../assets/img/img1.png';
import fondo from '../../assets/img/fondo.svg';
import logo from '../../assets/img/logo.svg';

const links = [
    {
        url: "/link1",
        text: "link1"
    },
    {
        url: "/link2",
        text: "link2"
    },
    {
        url: "/link3",
        text: "link3"
    },
    {
        url: "/link4",
        text: "link4"
    },
    {
        url: "/link5",
        text: "link5"
    }
]


function Header() {
    return(
        <HeaderML1 
            headerImg={img} 
            bgImgM={fondo} 
            bgImgD={fondo}
            nav={<NavML1 logoImg={logo} links={links} color="white" bgColor="orange"/>} 
        >
            <h1>hola mundo</h1>
            <p>pasdfadfadf</p>
            <button>boton </button>
        </HeaderML1>
    )
}

export default Header;