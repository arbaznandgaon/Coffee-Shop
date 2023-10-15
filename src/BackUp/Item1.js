import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function Item1() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUi5qm3ql6V7NkkzAyVvxMGBnAQumeChbzhhJES2ztA9c9KJo&s" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr89A_oxsqSnRK20PU3I4ENk3Iaw6MACyCXwxg2pP4Ghkk4kE&s" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ7F5EAVbPcc1E-psZ1qvvBDGmbk_2LP8Herf86DuzG9T-5bR&s" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* <Carousel>
      <Carousel.Item>
       <img className='w-screen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUi5qm3ql6V7NkkzAyVvxMGBnAQumeChbzhhJES2ztA9c9KJo&s'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr89A_oxsqSnRK20PU3I4ENk3Iaw6MACyCXwxg2pP4Ghkk4kE&s'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ7F5EAVbPcc1E-psZ1qvvBDGmbk_2LP8Herf86DuzG9T-5bR&s'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
  );
}

export default Item1;
