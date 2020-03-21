import React from 'react';
import Homepage from '../Homepage';
import HdContainer from './HdContainer';
import Container from '../../components/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <HdContainer/>
        <Homepage/>
      </Container>
    </div>
  );
}

export default App;
