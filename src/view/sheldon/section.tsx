import * as React from 'react';

//Mango-Library
import SectionML1 from '../../mangoLy/section/section1';

import img1 from '../../assets/img/sheldon/section/185.png'
import img2 from '../../assets/img/sheldon/section/183.png'
import img3 from '../../assets/img/sheldon/section/184.png'
import img4 from '../../assets/img/sheldon/section/182.png'

function Section() {
    return(
        <>
            <SectionML1 img={img1} reverse={false} >
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
                <h2>Define your target with Sheldon Easily </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
                <a href="">Try it free</a>
                <ul>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    
                </ul>
                <button>hola</button>
            </SectionML1>
            <SectionML1 img={img2} reverse={true} >
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
                <h2>Define your target with Sheldon Easily </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
                <a href="">Try it free</a>
            </SectionML1>
            <SectionML1 img={img3} reverse={false} >
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
                <h2>Define your target with Sheldon Easily </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
                <a href="">Try it free</a>
            </SectionML1>
            <SectionML1 img={img4} reverse={true} >
                <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
                <h2>Define your target with Sheldon Easily </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi</p>
                <a href="">Try it free</a>
            </SectionML1>
        </>
    )
}
export default Section;