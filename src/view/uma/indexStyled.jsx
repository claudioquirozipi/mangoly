import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonIcon = styled.div`
  border-radius: 3em;
  height: 3em;
  width: 3em;
  background: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  box-shadow: ${props => props.theme.shadow};
  &:hover {
    transform: scale(1.1);
  }
  img {
    height: 2em;
    width: 2em;
  }
`;
export const Form = styled.form`
  box-shadow: ${props => props.theme.shadow};
  padding: 2em 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
