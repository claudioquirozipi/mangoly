import React from "react";
import styled from "styled-components";

//Mango-Library
import InputContainer1 from "./input";
import InputContainer2 from "./input2";
import FormContainer1 from "./FormContainer1";
const FormSC = styled.form`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
`;

function Form({ children, width, onSubmit }) {
  return (
    <FormSC width={width || "100%"} onSubmit={onSubmit || null}>
      {children}
    </FormSC>
  );
}
Form.Container = FormContainer1;
Form.Input1 = InputContainer1;
Form.Input2 = InputContainer2;
export default Form;
