import React from 'react';
import './App.css';
import Main from './containers/Main';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
