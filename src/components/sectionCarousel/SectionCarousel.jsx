import React from 'react';
import './sectionCarousel.css';
import Card from '../card/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImagenComponent from '../imagenComponent/ImagenComponent';


const SectionCarousel = ({ backgroundColor, title }) => {
  return (
    <div className="section" style={{ backgroundColor }}>
      <div className="container py-5 text-center">
        <div className="text-center">
          <h1>{title}</h1>
          <p>
            Esta es una sección con fondo de color diferente. Cambia el contenido según tus necesidades.
          </p>

      <Row>
        <Col><Card/></Col>
      </Row>


       
       

        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
