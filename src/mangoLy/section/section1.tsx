import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango-Library
import ContainerML from '../../mangoLy/layout/container';
//Interface
interface iSectionML1 {
    children: any;
    img: string;
    reverse: boolean;
    bgImgM?: string;
    bgImgD?: string;
}
interface iSectionSC {
    reverse: boolean;
}

//Styled-Components
const SectionSC = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${MQ.sm} {
        justify-content: space-between;
        min-height: 80vh;   
        flex-direction: ${(props: iSectionSC) => props.reverse ? "row-reverse": "row"};
    }
    & > div {
        width: 100%;
        border: 1px solid red;
        @media ${MQ.sm} {
            width: 50%;
        }
    }
    img {
        width: 100%;
        border: 1px solid green;
        @media ${MQ.sm} {
            width: 40%;
        }
    }
`;

function SectionML1(props: iSectionML1) {
    const {children, img, bgImgM, bgImgD, reverse} = props;
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD}>
            <SectionSC reverse={reverse}>
                <img src={img} alt=""/>
                <div>
                    {children}
                </div>
            </SectionSC>
        </ContainerML>
    )
}
export default SectionML1;