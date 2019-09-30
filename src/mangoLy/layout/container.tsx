import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Interface
interface iContainerML{
    children: any;
    bgImgM?: string;
    bgImgD?: string;
}
interface iContainerBg {
    bgImgM?: string;
    bgImgD?: string;
}
const ContainerBg = styled.div`
    border: 1px solid pink;
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
    background-image: url(${(props: iContainerBg) => props.bgImgM});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media ${MQ.sm} {
        min-height: 80vh;
        background-image: url(${(props: iContainerBg) => props.bgImgD});
    }
    
`;
const SubContainer = styled.div`
    width: 80%;
    min-height: auto;
    border: 1px solid blue;
    @media ${MQ.sm} {
        min-height: 80vh;
    }
`;
function ContainerML(props: iContainerML) {
    const {children, bgImgM, bgImgD} = props;
    return(
        <ContainerBg bgImgM={bgImgM} bgImgD={bgImgD}>
            <SubContainer>
                {children}
            </SubContainer>
        </ContainerBg>
    );
}

export default ContainerML;