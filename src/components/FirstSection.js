import React from 'react';
import img3 from '../images/image3.jpeg';
export default function FirstSection() {
    return (
        <div className="firstSection">
            <div className="imgofFirstSection">
             <img src={img3} alt="" />
            </div>
            <div className="aboutMe">
                <p>It's<b> Rawan Arnoub </b></p>
                <p>Communications and Computer Networks Engineering
                    Graduated From Lebanese University Faculty of Technology
                </p>
                <a href="/about" className='btn-read-more'>Read More </a>
            </div>

        </div>
    )
}
