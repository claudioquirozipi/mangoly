import React, { useState } from "react";

//Mango-Ly
import { ContainerML, CardML, FormML, ButtonML } from "../../mangoLy";

//Styled-components
import { ContainerButtons, ButtonIcon, Form } from "./indexStyled";

import theme from "../../config/theme";
//Assets
import imgDelete from "../../assets/img/uma/delete.svg";
import imgEdit from "../../assets/img/uma/edit.svg";
import imgCard1 from "../../assets/img/uma/card1.webp";
//Data
import data from "./data";
const UmaComponents = () => {
  const [text, setText] = useState("");
  const [idForm, setIdForm] = useState(0);
  const [data, setData] = useState([
    {
      id: "1",
      text: "descripción del evento 1"
    },
    {
      id: "2",
      text: "descripción del evento 2"
    },
    {
      id: "3",
      text: "descripción del evento 3"
    },
    {
      id: "4",
      text: "descripción del evento 4"
    }
  ]);
  const [view, setView] = useState({
    editar: false,
    agregar: true,
    card: true
  });
  const handleOnSubmit = e => {
    e.preventDefault();
    const newData = [...data, { text, id: Math.floor(Math.random() * 100) }];
    console.log(newData);
    setData(newData);
    setText("");
  };
  const handleGetName = e => {
    setText(e.target.value);
    console.log(text);
  };
  const handleDelete = id => {
    const newData = data.filter(dato => dato.id !== id);
    setData(newData);
  };
  const handleGetNameEditar = id => {
    const newData = data.filter(dato => dato.id === id);
    setIdForm(id);
    setText(newData[0].text);
    setView({
      editar: true,
      agregar: false,
      card: false
    });
  };
  const handleEditar = e => {
    e.preventDefault();
    console.log("editando", text, idForm);
    let newData = [];
    let i = 0;
    data.forEach(element => {
      if (element.id === idForm) {
        newData[i] = {
          text,
          id: idForm
        };
      } else {
        newData[i] = data[i];
      }
      i++;
    });
    console.log(newData);
    setData(newData);
    setText("");
    setView({
      editar: false,
      agregar: true,
      card: true
    });
  };
  return (
    <>
      <ContainerML>
        <h1 className="cPrimary">Eventos Uma</h1>
      </ContainerML>

      {view.card ? (
        <ContainerML.Column>
          {data.map(data => (
            <CardML key={data.id}>
              <CardML.Img1 src={imgCard1} />
              <CardML.header></CardML.header>
              <CardML.Body>
                <h4>Evento</h4>
                <p className="tcSecondary">{data.text}</p>
                <ContainerButtons>
                  <ButtonIcon
                    color={theme.color.alert}
                    theme={theme}
                    onClick={() => handleDelete(data.id)}
                  >
                    <img src={imgDelete} alt="" />
                  </ButtonIcon>
                  <ButtonIcon
                    color={theme.color.primary}
                    theme={theme}
                    onClick={() => handleGetNameEditar(data.id)}
                  >
                    <img src={imgEdit} alt="" />
                  </ButtonIcon>
                </ContainerButtons>
              </CardML.Body>
            </CardML>
          ))}
        </ContainerML.Column>
      ) : null}
      {view.agregar ? (
        <ContainerML>
          <Form onSubmit={handleOnSubmit} theme={theme}>
            {/* <h3>agregar</h3> */}
            {/* <label htmlFor="text">text</label> */}
            <FormML.Input1>
              <input
                type="text"
                id="text"
                value={text}
                onChange={handleGetName}
                required
              />
            </FormML.Input1>
            <ButtonML onClick={() => {}}>
              {/* <input type="submit" value="agregar" /> */}
              Agregar
            </ButtonML>
          </Form>
        </ContainerML>
      ) : null}
      {view.editar ? (
        <ContainerML>
          <Form onSubmit={handleEditar} theme={theme}>
            {/* <h3>editar</h3> */}
            {/* <label htmlFor="text">text</label> */}
            <FormML.Input1>
              <input
                type="text"
                id="text"
                value={text}
                onChange={handleGetName}
                required
              />
            </FormML.Input1>
            {/* <input type="submit" value="editar" /> */}
            <ButtonML onClick={() => {}}>Editar</ButtonML>
          </Form>
        </ContainerML>
      ) : null}
    </>
  );
};

export default UmaComponents;
