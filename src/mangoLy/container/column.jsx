import * as React from "react";
import styled from "styled-components";
import MQ from "../../config/media";
import theme from "../../config/theme";

//Mango- Library
import { ContainerML } from "../index";

const ColumnContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.gap};
  justify-content: center;
  align-items: center;
  @media ${MQ.sm} {
    grid-template-columns: ${props => `repeat(2, 1fr)`};
  }
  @media ${MQ.md} {
    grid-template-columns: ${props => `repeat(${props.col4}, 1fr)`};
  }
  & > * {
    border: ${theme.guideLines ? "1px solid " + theme.color.primary : "none"};
  }
`;

function Column(props) {
  const {
    header,
    children,
    footer,
    min100vh,
    bgImgM,
    bgImgT,
    bgImgD,
    bgColor,
    col4,
    gap
  } = props;
  return (
    <ContainerML
      header={header || null}
      footer={footer || null}
      min100vh={min100vh || false}
      bgImgM={bgImgM || null}
      bgImgT={bgImgT || null}
      bgImgD={bgImgD || null}
      bgColor={bgColor || "transparent"}
    >
      <ColumnContainer col4={col4 ? "4" : "3"} gap={gap || "2em"}>
        {children}
      </ColumnContainer>
    </ContainerML>
  );
}
export default Column;
