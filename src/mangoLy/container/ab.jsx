import * as React from "react";
import styled from "styled-components";
import MQ from "../../config/media";
import theme from "../../config/theme";

//Mango-Library
import { ContainerML } from "../index";

//Styled-Components
const SectionSC = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2em;
  @media ${MQ.md} {
    grid-template-columns: 6fr 4fr;
    grid-template-rows: 1fr;
  }
  & > * {
    border: 1px solid ${theme.color.primary};
  }
`;
const ContainerA = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  @media ${MQ.md} {
    grid-column: ${props => (props.reverse ? "1/2" : "2/3")};
    grid-row: 1/2;
  }
`;
const ContainerB = styled.div`
  grid-column: 1/-1;
  grid-row: 2/3;
  @media ${MQ.md} {
    grid-column: ${props => (props.reverse ? "2/3" : "1/2")};
    grid-row: 1/2;
  }
`;

function AB(props) {
  const {
    header,
    children,
    footer,
    min100vh,
    bgImgM,
    bgImgT,
    bgImgD,
    bgColor,
    component,
    reverse
  } = props;
  console.log("reverse", reverse);
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
      <SectionSC>
        <ContainerA reverse={reverse}>{component}</ContainerA>
        <ContainerB reverse={reverse}>{children}</ContainerB>
      </SectionSC>
    </ContainerML>
  );
}
export default AB;
