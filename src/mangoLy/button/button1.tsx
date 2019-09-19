import * as React from 'react';
import styled, {css} from 'styled-components';
import {MQ} from '../../config/media';

//Interface 
interface iButtonML1 {
    children: any;
    variant?: boolean;
}
interface iButtonSC {
    variant?: boolean;
}

const ButtonSC = styled.button`
    background: white;
    color: orange;
    border-radius: 50px;
    height: 30px;
    border: 2px solid white;
    outline: none;
    ${(props: iButtonSC) => props.variant && css`
        background: transparent;
        color: white;
    `}
    @media ${MQ.sm} {
        height:40px;
    }
    @media ${MQ.md} {
        height: 50px;
    }
`;
function ButtonML1(props: iButtonML1) {
    const {children, variant} = props;
    return(
        <ButtonSC variant={variant}>
            {children}
        </ButtonSC>
    )
}

export default ButtonML1;