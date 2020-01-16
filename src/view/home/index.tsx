import React from "react";
import styled from "styled-components";

//Mango-Ly
import { ContainerML } from "../../mangoLy";

const H1 = styled.h1`
  background: pink;
  color: blue;
`;

function Home() {
  return (
    <>
      <ContainerML min100vh={true}>
        <h1 className="bgPrimary cSecondary">hola mundo </h1>
      </ContainerML>
      <ContainerML.Column
        header={<h1>Header Column</h1>}
        footer={<h1>footer</h1>}
      >
        <h1 className="hola">hola mundo </h1>
        <H1 className="cPrimary">hols</H1>
        <div>
          <h3>h3</h3>
          <h4>h4</h4>
        </div>
      </ContainerML.Column>
      <ContainerML.Column col4={true}>
        <h1 className="bgPrimary cSecondary">hola mundo </h1>
      </ContainerML.Column>
      <ContainerML.AB>
        <h3>Componente AB</h3>
      </ContainerML.AB>
      <ContainerML.AB reverse={true}>
        <h3>Componente AB</h3>
      </ContainerML.AB>
    </>
  );
}

export default Home;
