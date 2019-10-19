import * as React from 'react';


//Mango-Library
import {
    ContainerML,
    FormML,
    ButtonML
} from '../../mangoLy';

function Form() {
    return(
        <ContainerML.Form title="título form">
            <FormML width="100%">
                <h1>hola</h1> 
                <h1> formulario</h1>
                <label htmlFor="">hola</label>  
                <FormML.Input1 color="#525f7f">
                    <input type="text"/>
                </FormML.Input1>              
                <ButtonML as="submit">send</ButtonML>
            </FormML>
        </ContainerML.Form>
    )
}

export default Form;