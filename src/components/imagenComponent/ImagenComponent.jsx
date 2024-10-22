import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React, { useEffect } from 'react';
import Holder from 'holderjs';



function ImagenComponent() {


  useEffect(() => {
    Holder.run();  // Inicializa Holder.js después de que el componente se monte
  }, []);



  return (
          <Image src="holder.js/800x500" rounded />
  );
}

export default ImagenComponent;