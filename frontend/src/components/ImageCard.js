import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small || 'No Image available'} />
      <Card.Body>
        <Card.Title>
          {image.title.toUpperCase() || 'No Image available'}
        </Card.Title>
        <Card.Text>
          {image.description || image.alt_description || 'No Desc available'}
        </Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
