import * as React from 'react';
import styled from 'styled-components';
import {MQ} from '../../config/media';

//Interface
interface iHeaderType1 {
    children: any;
    headerImg: string;
}
const HeaderSC = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: auto;
    @media ${MQ.sm} {
        flex-direction: row;
        height: 100%;
    }
    & > div {
        border: 1px solid green;
    }
`;
const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    @media ${MQ.sm} {
        width: 48%;
        text-align: left;
    }
`;
const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media ${MQ.sm} {
        width: 48%;
    }
    img {
        width: 100%;
        height: auto;
    }
`;
function HeaderTypeML1(props: iHeaderType1) {
    const {children, headerImg} = props;
    return(
        <HeaderSC>
            <ContainerText>
                {children}
            </ContainerText>
            <ContainerImg><img src={headerImg} alt="img"/></ContainerImg>
        </HeaderSC>
    )
}
export default HeaderTypeML1;