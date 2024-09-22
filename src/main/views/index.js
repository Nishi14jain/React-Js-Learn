import { Container, Row, Col, Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/self-love-7200173_1280.jpg';
import image2 from '../images/woman-7306978_1280.jpg';
import image3 from '../images/woman-8144573_1280.png'
import me1 from '../images/me1.png'

import Card from 'react-bootstrap/Card';

import '../js/bootStrap.js';
import '../css/style.css'

function Index() {
  return (
    <Container fluid style={{ width: '100%', padding: 0 }}>
      <row>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="Frist slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </row>

      <Row style={{margin:'0'}}>
        <Col style={{display:'flex', justifyContent:'space-between', margin:'10px'}} >
        <Image className='me_img' src={me1} thumbnail style={{width:"100%"}} />

        </Col>
        <Col style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
         <div>
         <h1 className='me1'>
            Nishi Jain 
           </h1>
           <p>
           You are a software developer with 1.5 years of experience, particularly skilled in PHP and Laravel. You've worked on several projects, refining your expertise in building robust web applications, and you're currently exploring new opportunities for a job change.
           </p>
         </div>

       
          
        </Col>
      </Row>

    </Container>

  );

}
export default Index;
