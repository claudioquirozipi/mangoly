import React from 'react';

//Components
import Header from './header';
import Section from './section';
import Cards from './cards';
import Testimonials from './testimonials';
import Form from './form';
import Footer from './footer';

function Home() {
    return(
        <>
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