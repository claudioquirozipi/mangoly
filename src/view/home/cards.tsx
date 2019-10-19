import * as React from 'react';

//Mango-Library
import CardContainerML from '../../mangoLy/card/cardContainer';
import {
    CardML,
    ButtonML
} from '../../mangoLy';
//Assets 
import fondo from '../img/fondo.jpg';
import ciudad from '../img/ciudad.jpg';
import Card from '../../mangoLy/card';
function Cards() {
    return(
        <>
            <CardContainerML 
                bgImgM={fondo}
                bgImgD={fondo}
                gridGap="5vw"
                gridColumns = {2}
                
            >
                <CardML>
                    <CardML.Img1 src={ciudad} height="200px"/>
                    <CardML.Body>
                        <h2>hola que hace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <CardML.Img2 src={ciudad} diameter="50px" height="100px" position="flex-start"/>
                    <CardML.Body>
                        <h2>hola que hace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <Card.header>
                        <CardML.Img1 src={ciudad} height="100px"/>
                    </Card.header>
                    <CardML.Body>
                        <h2>hola que hace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <Card.header>
                        <CardML.Img2 src={ciudad} diameter="50px" height="100px" position="flex-start"/>
                    </Card.header>
                    <CardML.Body>
                        <h2>hola que hace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <Card.header>
                        <CardML.Img2 src={ciudad} diameter="50px" height="100px" position="center"/>
                    </Card.header>
                    <CardML.Body>
                        <h2>hola que hace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <Card.header>
                        <CardML.Img2 src={ciudad} diameter="50px" height="100px" position="flex-end"/>
                    </Card.header>
                    <CardML.Body>
                        <h2>hola que hace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
            </CardContainerML>
            <CardContainerML 
                gridGap="3vw"
                gridColumns = {3}
                title="Lorem ipsum dolor sit amet, consec te"
            >
                <CardML>
                    <CardML.Img1 src={ciudad} height="200px"/>
                    <CardML.Body>
                        <h2>hola que </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <CardML.Img2 src={ciudad} diameter="50px" height="100px" position="flex-start"/>
                    <CardML.Body>
                        <h2>hola que </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
                <CardML>
                    <Card.header>
                        <CardML.Img1 src={ciudad} height="100px"/>
                    </Card.header>
                    <CardML.Body>
                        <h2>hola que </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eveniet earum.</p>
                        <ButtonML width="100px">botón</ButtonML>
                    </CardML.Body>
                </CardML>
            </CardContainerML>
            <CardContainerML 
                gridColumns = {4}
                title="Lorem ipsum dolor sit amet, consec te"
            >
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
            </CardContainerML>
        </>
    )
}

export default Cards;