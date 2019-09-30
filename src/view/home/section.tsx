import * as React from 'react';

//Mango-Library
import SectionML1 from '../../mangoLy/section/section1';

//Assets
import img from '../../assets/img/img1.png';
import bgImgM from '../../assets/img/fondo.svg';
import bgImgD from '../../assets/img/fondo.jpg';

function Section() {
    return(
        <>
            <SectionML1 img={img} reverse={false} bgImgM={bgImgM} bgImgD={bgImgD}>
                <h1>Section tipo 1</h1>
            </SectionML1>
            <SectionML1 img={bgImgM} reverse={true}>
                <h1>Section tipo 1</h1>
            </SectionML1>
        </>
    );
}


export default Section;