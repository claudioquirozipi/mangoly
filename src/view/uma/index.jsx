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
      text: "tarea 1"
    },
    {
      id: "2",
      text: "tarea 2"
    },
    {
      id: "3",
      text: "tarea 3"
    },
    {
      id: "4",
      text: "tarea 4"
    }
  ]);

  const handleOnSubmit = e => {
    e.preventDefault();
    const newData = [...data, { text, id: data.length + 1 }];
    console.log(newData);
    setData(newData);
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
  };
  const handleEditar = e => {
    e.preventDefault();
    console.log("editando", text, idForm);
    const newData = data.filter(dato => dato.id !== idForm);
    setData([
      ...newData,
      {
        text,
        id: idForm
      }
    ]);
  };
  return (
    <>
      <ContainerML>
        <h1 className="cPrimary">Eventos Uma</h1>
      </ContainerML>
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

      <ContainerML.Column>
        {data.map(data => (
          <CardML>
            <CardML.Img1 src={imgCard1} />
            <CardML.header></CardML.header>
            <CardML.Body>
              <h4>Evento</h4>
              <p className="tcSecondary" key={data.id}>
                {data.text}
              </p>
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
    </>
  );
};

export default UmaComponents;
