import styled from 'styled-components';

export const Nav1SC = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        border: 2px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 920px;
        img {
            height: 30px;
            width: auto;
        }
    }
`;