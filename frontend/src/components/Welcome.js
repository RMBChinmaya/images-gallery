import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is a simple application that retrives photos using Unsplash API. In
      order to start enter ant search term in the input
    </p>
    <p>
      <Button bsstyle="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
