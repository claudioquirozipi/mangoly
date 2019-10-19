import * as React from 'react';

//Mango-Library
import {
    SectionML
} from '../../mangoLy';

//Assets
import img from '../../assets/img/img1.png';
import bgImgM from '../../assets/img/fondo.svg';
import bgImgD from '../../assets/img/fondo.jpg';

function Section() {
    return(
        <>
            <SectionML title={<h1>Hola mundo</h1>} img={img} reverse={false} bgImgM={bgImgM} bgImgD={bgImgD}>
                <h1>Section tipo 1</h1>
            </SectionML>
            <SectionML img={bgImgM} reverse={true}>
                <h1>Section tipo 1</h1>
            </SectionML>
        </>
    );
}


export default Section;