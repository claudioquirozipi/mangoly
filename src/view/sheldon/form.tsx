import * as React from 'react';

//Mango-Library
import FormContainerML1 from '../../mangoLy/form/FormContainer1';
function Form() {
    return(
        <FormContainerML1 title="este es el título ">
            <form>
                <img src="" alt=""/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button>send</button>
            </form>
            <h2>hola mundo</h2>
        </FormContainerML1>
    )
}

export default Form;