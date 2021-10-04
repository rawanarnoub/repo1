import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bck1 from '../HeaderImages/bck1.jpg';
import bck2 from '../HeaderImages/bck2.jpg';
import bck3 from '../HeaderImages/bck3.jpg';

export default function Header() {
    return (
        <div>
<Carousel variant="light">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bck1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Welcome to Rawan's Page</h1>
      <p>Tell us what you like and we'll get you the Good Stuff.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bck2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Good Service</h1>
      <p>Working as a team is a big part of customer service.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bck3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>Get Contact with us</h1>
      <p>Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
