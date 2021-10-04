import React from 'react';
// import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function Contact() {
    return (
      <div>
        <div>
          <h1>Keep in Touch</h1>
          <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
        </div>
        <div className="ListContact">
        <ListGroup variant="flush">
          <p><b>Contact Information</b></p>
          <ListGroup.Item>Address : Lebanon-Beirut </ListGroup.Item>
          <ListGroup.Item>Phone number : +961 79321644</ListGroup.Item>
          <ListGroup.Item>Email : rawanarnoub@gmail.com</ListGroup.Item>
          <p><b>Or you can visit my social media pages</b></p>
          <ListGroup.Item>Fb: Rawan Ibrahim Arnoub</ListGroup.Item>
          <ListGroup.Item>LinkedIn : Rawan Arnoub</ListGroup.Item>
          <ListGroup.Item>GitHub: Rawanarnoub</ListGroup.Item>
          <ListGroup.Item>Twiter: RawanArnoubb</ListGroup.Item>
          <ListGroup.Item>Instagram: Rawanarnoub</ListGroup.Item>
        </ListGroup>
        
        </div>
        <div>
        {/* <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          </Form> */}
        </div>
      </div>
        
      
    );
  }
  
  export default Contact;