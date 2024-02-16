import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Products from './components/Products/Products';

function App() {
  
  return (
   <div className="App">

    <Container>
       <Products />
    </Container>
    </div>
  );
}

export default App;


// other code
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import States from './components/States'
// import Rendering from './components/Rendering';
// import Helo from './components/  Helo';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container} from 'react-bootstrap';

// function App() {
//   const number = 1;
//   return (
//    <div className="App">
//      <Header></Header>
//      <Rendering number={number}></Rendering>
     
//       <Helo></Helo>
     
//     <Container>
//       <States name={"Keral"} population={"3cr"} />
      
//       <States name={"Tamilnadu"} population={"10cr"}/>
//     </Container>
//     </div>
//   );
// }

// export default App;
