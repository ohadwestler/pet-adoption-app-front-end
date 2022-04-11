import React, { Component, useState } from 'react';
import { Alert, Card, Button } from 'react-bootstrap';
export default function Pets(){
    const [hasPats, setHasPets] = useState(false)
    return(
        <>{!hasPats?
        <Alert className='m-5' variant="success">
  <Alert.Heading>you currently do not own or foster any pets.</Alert.Heading>
</Alert>:
<>
<Card className='m-5' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">See More</Button>
  </Card.Body>
</Card>
</>}
        </>
    )
}