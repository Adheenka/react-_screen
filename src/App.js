import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import States from './components/States'
import Rendering from './components/Rendering';
import Helo from './components/  Helo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

function App() {
  const number = 0;
  return (
   <div className="App">
     <Header></Header>
     <Rendering number={number}></Rendering>
     
      <Helo></Helo>
     
    <Container>
      <States name={"Keral"} population={"3cr"} />
      
      <States name={"Tamilnadu"} population={"10cr"}/>
    </Container>
    </div>
  );
}

export default App;
