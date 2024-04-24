import React from 'react';
import './App.css';
import MovieCards from './components/MovieCards';
import data from './Data';

function App() {
  return (
    <div className="App">
      <MovieCards data={data}/>
    </div>
  );
}

export default App;
