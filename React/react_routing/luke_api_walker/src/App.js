import './App.css';
import { Route, Routes } from "react-router-dom";
import { Person } from './views/Person'
import { Planet } from './views/Planet'
import { Home } from './views/Home'
import { Form } from './components/Form'
import { NotFound } from './views/NotFound'
import React, { useState } from 'react';


function App() {

  return (
    <>
      <Form/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/people/:id" element={<Person />} />
        <Route path="/planets/:id" element={<Planet />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
