import * as React from 'react';

//Mango-Library
import FooterML1 from '../../mangoLy/footer/footer1';
import Span4 from '../../mangoLy/footer/span4';
import Span2 from '../../mangoLy/footer/span2';

//Assets
import logo from '../../assets/img/sheldon/footer/logo.svg';

function Footer() {
    return(
        <FooterML1>
            <Span4>
                <img src={logo} alt="logo"/>
                <h2>Sheldon</h2>
            </Span4>
            <Span2>
                
            </Span2>
            <Span2>
                <ul>
                    <li><h2>Suport</h2></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                </ul>
            </Span2>
            <Span2>
                <ul>
                    <li><h2>Media relations</h2></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                </ul>
            </Span2>
            <Span2>
                <ul>
                    <li><h2>Invertors</h2></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                    <li><p>texto</p></li>
                </ul>
            </Span2>
        </FooterML1>
    )
}

export default Footer;