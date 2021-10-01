import React, { Component } from 'react'
import {Dropdown, Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'



class homepageComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div >
 
 <Carousel fade>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="01.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>CECILIA GOMEZ</h3>
      <p>TECNICA EN SISTEMA.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="cdp.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>CECILIA GOMEZ</h3>
      <p>TECNICA EN SISTEMA.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="info.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>CECILIA GOMEZ</h3>
      <p>TECNICA EN SISTEMA.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
      </div>
    )
  }
}

export default homepageComponent
 
