import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Mango- Library
import ContainerML from '../layout/container';

//Interface
interface iCardsML {
    children: any;
    bgImgM?: string;
    bgImgD?: string;
    title: string;
    text: string;
    gridColumns: number;
}
interface iCardContainer {
    gridColumns: number;
}
const CardContainer = styled.div`
    border: 1px solid yellow;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${(props: iCardContainer) => `auto repeat(${props.gridColumns}, auto)`};;
    justify-content: center;
    align-items: center;
    border: 1px solid cyan;
    @media ${MQ.sm} {
        min-height: 80vh;
        grid-template-columns: ${ (props: iCardContainer) => `repeat(${props.gridColumns}, 1fr)` };
        grid-template-rows: auto 1fr;
    }
    h1 {
        border: 1px solid red;
    }
`;
const TitleContainer = styled.div`
    grid-column: 1/-1;
    grid-row: 1/2;
    text-align: center;
`;
function CardsML(props: iCardsML) {
    const {children, bgImgM, bgImgD, title, text, gridColumns} = props;
    
    
    return(
        <ContainerML bgImgM={bgImgM} bgImgD={bgImgD}>
            <CardContainer gridColumns={gridColumns}>
                <TitleContainer>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </TitleContainer>
                {children}
            </CardContainer>
        </ContainerML>
    )
}
export default CardsML;