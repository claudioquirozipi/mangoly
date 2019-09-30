import * as React from 'react';
//Mango-Library
import FooterML1 from '../../mangoLy/footer/footer1';
import Span4 from '../../mangoLy/footer/span4';
import Span2 from '../../mangoLy/footer/span2';
function Footer() {
    return(
        <FooterML1>
            <Span2><h2>span2</h2></Span2>
            <Span4>
                <h2>span4</h2>  
                <form >
                    <input type="text"/>
                    <input type="button" value="hola"/>
                </form>
            </Span4>
            <Span2><h2>span2</h2></Span2>
            <Span2><h2>span2</h2></Span2>
            <Span2><h2>span2</h2></Span2>
        </FooterML1>
    );
}

export default Footer;