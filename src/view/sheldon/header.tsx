import * as React from 'react';

//Mango-Library
import HeaderML1 from '../../mangoLy/header/header1';
import NavML1 from '../../mangoLy/navbar/nav1';
import HeaderTextML1 from '../../mangoLy/header/headerText1';
//Assets
import bgImg from '../../assets/img/fondo.svg';
import img from '../../assets/img/sheldonHeaderImg.png';
import logo from '../../assets/img/sheldon/header/logo.svg';

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
        url: "/link2",
        text: "link2"
    }
]
function Header() {
    return(
        <HeaderML1 
            bgImgM={bgImg} 
            bgImgD={bgImg}
            headerImg={img}
            nav={<NavML1  logoImg={logo} links={links} color="black" bgColor="blue"/>}
        > 
            <HeaderTextML1>
                <h1 className="red">The power of viralization media in your hand.</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                <div>
                    <button>Boton</button>
                </div>
            </HeaderTextML1>
        </HeaderML1>
    )
}

export default Header;