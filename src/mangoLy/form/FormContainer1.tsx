import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';
//Mango-Library
import Container from '../layout/container';

//Interface 
interface iFormContainerML1 {
    children: any;
    bgImgM?: string;
    bgImgD?: string;
    title: string;
}
const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        background: teal;
        text-align: center;
        width: 100%;
        font-weight: 700;
        @media ${MQ.sm} {
            width: 50%;
        }
    }
`;
const ContainerFormSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        @media ${MQ.sm} {
            width: 50%;
        }
    }
`;
function FormContainerML1(props: iFormContainerML1) {
    const {children, bgImgM, bgImgD, title} = props;
    return(
        <Container bgImgM={bgImgM} bgImgD={bgImgD}>
            <ContainerTitle>
                <h2>{title}</h2>
            </ContainerTitle>
            <ContainerFormSC>
                <div>
                    {children}
                </div>
            </ContainerFormSC>
        </Container>
    )
}
export default FormContainerML1;