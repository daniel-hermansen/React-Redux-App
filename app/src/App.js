import React from 'react';
import './App.css';
import DogsList from './components/DogsList';

function App() {
  return (
    <div className="App">
      <h1>Doggo Picture of the Day!</h1>
      <DogsList/>
    </div>    
  );
};

export default App;