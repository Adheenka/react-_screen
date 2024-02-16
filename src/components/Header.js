import React from 'react'
import { Child } from './Child';
import { useState , useEffect} from 'react';
import {Button ,Navbar , Nav ,Form ,Container,InputGroup,Row,Col} from 'react-bootstrap';
import './Header.css';
const Header = () => {

  const [change, setColor] = useState("green");

  const changeColor = () => {
    setColor("yellow");
  };

  const click = () => {
    console.log("clicked");
  };
  const [count, changeCount] = useState(0);
  const increaseCount= () => {
    changeCount(count + 1);
  };


  return (
    <div>

        
<Button onClick={click}>click</Button>
        <h1 className="bg-success">is{change}</h1>
        <Button onClick={changeColor}>change colour name</Button>
        <h1 style={{ color:'red'}}>is{count}</h1>
        <Button onClick={increaseCount}>+</Button>
        <Child />
    </div>
  )
};

export default Header