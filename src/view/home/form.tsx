import * as React from 'react';


//Mango-Library
import FormContainerML1 from '../../mangoLy/form/FormContainer1';

function Form() {
    return(
        <FormContainerML1 title="título form">
            <form>
                <h1> formulario</h1>
                <label htmlFor="">hola</label>                
                <input type="text"/>
                <input type="button" value="enviar"/>
            </form>
        </FormContainerML1>
    )
}

export default Form;