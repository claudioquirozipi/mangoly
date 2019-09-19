import React from 'react';

//MangoLy
import BgHaderML from '../../mangoLy/header/bgHeader';
import ContainerML from '../../mangoLy/layout/container';
import HeaderTypeML1 from '../../mangoLy/header/headerType1';
import HeaderTextML1 from '../../mangoLy/header/headerText1';
import NavML1 from '../../mangoLy/navbar/nav1';
import ButtonML1 from '../../mangoLy/button/button1';

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
function Home() {
    return(
        <BgHaderML bgImgM={fondo} bgImgD={fondo}>
            <NavML1  logoImg={logo} links={links} color="#fff" bgColor="transparent"/>
            <ContainerML>
                <HeaderTypeML1 headerImg={img}>
                    <HeaderTextML1>
                        <h1>Lorem ipsum dolor sit amet, consec</h1>
                        <h2>hola h2</h2>
                        <img src={logo} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                        <div>
                            <ButtonML1
                                variant={false}
                            >Button</ButtonML1>
                            <ButtonML1
                                variant={true}
                            >Button</ButtonML1>
                        </div>
                    </HeaderTextML1>
                </HeaderTypeML1>
            </ContainerML>
        </BgHaderML>
    )
}

export default Home;