import * as React from 'react';

import CardsML from '../../mangoLy/card/cards';

function Cards() {
    return(
        <>
            <CardsML 
                gridColumns = {2}
                title="Lorem ipsum dolor sit amet, consec te"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                maga aliquam erat"
            >
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
            </CardsML>
            <CardsML 
                gridColumns = {3}
                title="Lorem ipsum dolor sit amet, consec te"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                maga aliquam erat"
            >
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
            </CardsML>
            <CardsML 
                gridColumns = {4}
                title="Lorem ipsum dolor sit amet, consec te"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                maga aliquam erat"
            >
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
                <h1>Card tipo 1</h1>
            </CardsML>
        </>
    )
}

export default Cards;