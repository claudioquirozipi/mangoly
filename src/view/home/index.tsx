import React from 'react';

//Components
import Header from './header';
import Section from './section';
import Cards from './cards';
import Testimonials from './testimonials';
import Form from './form';
import Footer from './footer';

//Mango-Lybrary
import {SeoML} from '../../mangoLy';
//Assets
import imgSeo from '../img/ciudad.jpg';
function Home() {
    return(
        <>
            <SeoML
                title="titulo Seo"
                description="descripción Seo"
                img= {imgSeo}
                keywords ="palabras, claves, Seo"
            />
            <Header />
            <Section />
            <Cards />
            <Testimonials />
            <Form />
            <Footer />
        </>
    )
}

export default Home;