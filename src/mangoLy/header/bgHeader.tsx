import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';
//Interface
interface iBgHeaderML{
    children: any; 
    bgImgM: string;
    bgImgD: string;
}
interface iBgHeaderSC {
    bgImgM: string;
    bgImgD: string;
}
const BgHeaderSC = styled.div`
    background-image: url(${(props: iBgHeaderSC) => props.bgImgM });
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    @media ${MQ.sm} {
        background-image: url(${(props: iBgHeaderSC) => props.bgImgD });
        height: 510px;
    }
    @media ${MQ.md} {
        height: 100vh;
    }
`;


function BgHeaderML(props: iBgHeaderML) {
    const { children, bgImgM, bgImgD} = props;
    return(
        <BgHeaderSC bgImgM={bgImgM} bgImgD={bgImgD}>
            {children}
        </BgHeaderSC>
    )
}

export default BgHeaderML;