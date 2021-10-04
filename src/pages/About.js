import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
function About() {
    return (
    <div>
      <h1><center>Rawan Ibrahim Arnoub</center></h1>
      <p><center>Communications and Computer Networks Engineering</center></p>
      
      <p><b>Education</b> <br />
      <ul>
        <li>Currently , I am studyimg Master in Telecom at Lebanese University Faculty of Technology</li>
        <li> I have Baccholar degree in Communications and Computer Networks Engineering from 
          Lebanese University Faulty of Technology saida since 2020
        </li>
          </ul></p>
      <p><b>Work Experience</b>
      <br /><ol>
          <li>Internship at Neumman Company saida baranch from July 2019 till
            September 2019 as a Software Developer
          </li>
          <li>Internship at Ogero company as a Telecommunication Engineering</li>
          <li>Teaching private lessons such as mathmatics , physics, chemistry and computer</li>

        </ol></p>
      
      <p><b>Volenteer</b>
      <br /><ul>
      <li>Volenteering with English Access Micro scholarship Program
          Alumni (Amidest) (November 2017 - Present)
          <ol>
      <li>
            Octeber 7, 2018 Organized Field Day at AUB with Access 13.
      </li>
      <li>September 2017 Leadership Volenterd with Access 11 Project Citized
            showcase at LAU.
            
      </li></ol> </li>
        </ul></p>

      <p><b>Skils</b>
      <br />
        <ol><b>Tools & Technologies</b>
          <li>Web Development (HTML5 - CSS - JS - ReactJS - Bootstrap)</li>
          <li>SQL</li>
          <li>MATLAB</li>
          <li>Basic in C , C# and Python</li>
          <li>Vb.net</li>
          <li>Telecommunication knowledge</li>
          <li>Electronics Circuit </li>
        </ol>
        <ol><b>Interpersonal Skills</b>
          <li>Teamwork</li>
          <li>Team Leadership</li>
          <li>Time Managment</li>
          <li>Network Communications</li>
        </ol></p>

      <p><b>Certificates</b>
      <br />gggg</p>

      <p><b>Languages</b>
        <ul>
        <li>Fluent in English</li>
          <li>Native Arabic</li>
        </ul>
      </p>
      <p><b>Interests</b>
      <ul>
          <li>Reading Novels</li>
          <li>Swimming</li>
        </ul>



      </p>

    {/* <Card border="info" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Info Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card> */}
    <CardGroup>
  <Card>
    <Card.Img variant="top" src={image6} />
    {/* <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body> */}
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={image7} />
    {/* <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body> */}
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={image8} />
    {/* <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body> */}
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
</CardGroup>
    </div>
    );
  }
  
  export default About;