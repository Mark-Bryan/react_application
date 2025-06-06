import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionnaire from "./components/pages/Questionnaire";
import './Questionnaire.css'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/questionnaire/:id" element={<Questionnaire />} />
          <Route path="/" element={<h2>Welcome! Enter a questionnaire ID to begin</h2>}/>
        </Routes>
    </Router>
  );
}

export default App;