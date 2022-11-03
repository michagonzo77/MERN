import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from './views/Home'
import { NotFound } from './views/NotFound'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/home/api' replace />} />
        <Route path="/home/api" element={<Home />} />
        <Route path="/home/api/:type/:id" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
