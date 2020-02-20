import React from "react";
import styled from "styled-components";

//Hooks
import useForm from "../../hooks/useForm";
//Mango-Ly
import { ContainerML, FormML } from "../../mangoLy";
const initialValues = {
  email: "hola@gmail.com",
  password: "123"
};
function Home() {
  const { fields, getInput, getCheckbox, getRadio, getSelect } = useForm({
    initialValues
  });

  console.log("fields", fields);

  return (
    <ContainerML>
      <h1>Form</h1>
      <FormML>
        <input type="text" {...getInput("angelo")} />
        <input type="text" {...getInput("apellido")} />
        <input type="text" {...getInput("name")} />
        <input type="email" {...getInput("email")} />
        <input type="password" {...getInput("password")} />
        <input type="password" {...getInput("rePassword")} />
        <br />
        <input type="checkbox" name="" id="isOk" {...getCheckbox("isOk")} />
        <label htmlFor="isOk">is ok</label>
        <br />
        <input type="radio" name="" id="" {...getRadio("gender", "male")} />
        <span>male</span>
        <br />
        <input type="radio" name="" id="" {...getRadio("gender", "female")} />
        <span>female</span>
        <br />
        <select name="" id="" {...getSelect("car")}>
          <option value="audi">audi</option>
          <option value="ford">ford</option>
          <option value="mercedes">mercedes</option>
        </select>
      </FormML>
    </ContainerML>
  );
}

export default Home;
