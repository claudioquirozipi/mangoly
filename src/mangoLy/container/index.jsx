import * as React from "react";
import styled from "styled-components";
import MQ from "../../config/media";
import theme from "../../config/theme";
//Mango-Ly
import AB from "./ab";
import Column from "./column";

const ContainerBg = styled.div`
  border: ${theme.guideLines ? "1px solid " + theme.color.primary : "none"};
  display: flex;
  justify-content: center;
  padding: 10vh 0;
  background: ${props => props.bgColor};
  background-image: url(${props => props.bgImgM});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media ${MQ.sm} {
    background-image: url(${props => props.bgImgT});
  }
  @media ${MQ.md} {
    background-image: url(${props => props.bgImgD});
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${theme.guideLines ? "1px solid " + theme.color.secondary : "none"};
  width: 80%;
  @media ${MQ.md} {
    min-height: ${props => (props.min100vh ? "80vh" : "auto")};
  }
  @media ${MQ.lg} {
    max-width: 1450px;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;

  border: ${theme.guideLines ? "1px solid " + theme.color.tertiary : "none"};
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;

  border: ${theme.guideLines ? "1px solid " + theme.color.tertiary : "none"};
`;
function Container(props) {
  const {
    header,
    children,
    footer,
    bgImgM,
    bgImgT,
    bgImgD,
    min100vh,
    bgColor
  } = props;

  return (
    <ContainerBg
      bgImgM={bgImgM || null}
      bgImgT={bgImgT || null}
      bgImgD={bgImgD || null}
      bgColor={bgColor || "transparent"}
    >
      <SubContainer min100vh={min100vh || false}>
        {header ? <Header>{header}</Header> : null}
        {children}
        {footer ? <Footer>{footer}</Footer> : null}
      </SubContainer>
    </ContainerBg>
  );
}
Container.AB = AB;
Container.Column = Column;
export default Container;
