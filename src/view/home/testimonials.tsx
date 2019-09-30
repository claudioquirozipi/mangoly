import * as React from 'react';

//Mango-Library
import TestimonialsML1 from '../../mangoLy/testimonials/testimonials1';

//Assets
import img from '../../assets/img/img1.png';
import bgImgM from '../../assets/img/fondo.svg';
import bgImgD from '../../assets/img/fondo.jpg';

function Section() {
    return(
        <>
            <TestimonialsML1 img={img} reverse={false} bgImgM={bgImgM} bgImgD={bgImgD}>
                <h1>Testimoniales tipo 1</h1>
            </TestimonialsML1>
            <TestimonialsML1 img={bgImgM} reverse={true}>
                <h1>Testimoniales tipo 1</h1>
            </TestimonialsML1>
        </>
    );
}


export default Section;