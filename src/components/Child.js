import React from 'react'
import {Button ,Navbar , Nav ,Form ,Container,InputGroup,Row,Col} from 'react-bootstrap';
export const Child = () => {
    const handleButtonClick = (buttonName) => {
        console.log(`Button ${buttonName} clicked`);
        // You can add your button click logic here
      };
  return (
    <>
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>

    
      
      
      <Button variant="primary" onClick={() => handleButtonClick('Button 1')}>Button 1</Button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
    </>
        
    
  );
}
