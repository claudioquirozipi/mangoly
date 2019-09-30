import React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';
//Components
import ContainerHeaderML from '../layout/containerHeader';

//Interface
interface iNavContainer {
    bgColor?: string
}
interface iNavML1 {
    logoImg: string;
    links?: any;
    color?: string;
    bgColor?: string;
}
interface iLinks {
    url: string;
    text: string;
}
interface iUL {
    toggle: boolean;
}
interface iSVG {
    color?: string;
}


const NavContainer = styled.div`
    background: ${(props: iNavContainer) => props.bgColor};
`;
const NavSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    
`;
const SVGUl = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    svg {
        @media ${MQ.sm} {
            display: none;
        }
    }
    ul{
        
    }
`;
const Ul = styled.ul`
    display: flex;
    transform: ${(props:iUL) => props.toggle ? "scaleY(1)" : "scaleY(0)"};
    transition: transform .3s;
    transform-origin: top center;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    position: absolute;
    top: 120%;
    right: 0;
    padding: 0;

    width: 130px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    
    @media ${MQ.sm} {
        transform: scaleY(1);
        box-shadow: none;
        position: static;
        flex-direction: row;
        width: auto;
        background: transparent;
    }
    li {
        list-style: none;
        width:100%;
        @media ${MQ.sm} {
            margin-left: 16px;
        }
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            font-weight: 600;
            color: orange;
            padding: 10px 0;
            width: 100%;
            @media ${MQ.sm} {
                color: white;
                padding: 0;
            }
        }
    }
`;

const SVG = (props:iSVG) => {
    const {color}= props
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26.25" viewBox="0 0 30 26.25">
            <path d="M1.071,64.821H28.929A1.071,1.071,0,0,0,30,63.75V61.071A1.071,1.071,0,0,0,28.929,60H1.071A1.071,1.071,0,0,0,0,61.071V63.75A1.071,1.071,0,0,0,1.071,64.821Zm0,10.714H28.929A1.071,1.071,0,0,0,30,74.464V71.786a1.071,1.071,0,0,0-1.071-1.071H1.071A1.071,1.071,0,0,0,0,71.786v2.679A1.071,1.071,0,0,0,1.071,75.536Zm0,10.714H28.929A1.071,1.071,0,0,0,30,85.179V82.5a1.071,1.071,0,0,0-1.071-1.071H1.071A1.071,1.071,0,0,0,0,82.5v2.679A1.071,1.071,0,0,0,1.071,86.25Z" fill={color} transform="translate(0 -60)"/>
        </svg>
    )
}



function NavML1(props: iNavML1) {
    const {logoImg, links, color, bgColor} = props;
    const [toggle, setToggle] = React.useState(false);
    function handleToggle() {
        setToggle(!toggle);
    }
    return(
        <NavContainer bgColor={bgColor}>
            <ContainerHeaderML>
                <NavSC >
                    <img src={logoImg} alt="logo"/>
                    {links.length>=0? 
                        <SVGUl>
                            <div onClick={handleToggle}>
                                <SVG color={color}/>
                            </div>
                            <Ul toggle={toggle}>
                                {links.map((link: any) => (
                                    <li><a href={link.url}>{link.text}</a></li>
                                    ))}
                            </Ul>
                        </SVGUl>
                    :null}
                </NavSC>
            </ContainerHeaderML>
        </NavContainer>
    )
}

export default NavML1;