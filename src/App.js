import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './Home/Home';
function App() {
  return (
    <React.StrictMode>
      <HomePage />
  </React.StrictMode>
  );
}

export default App;