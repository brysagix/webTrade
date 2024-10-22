import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Holder from 'holderjs';
import React, { useEffect } from 'react';



function BasicExample() {


  useEffect(() => {
    Holder.run();  // Inicializa Holder.js después de que el componente se monte
  }, []);


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/300x200"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;