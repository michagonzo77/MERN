import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {Pokemon} from './views/Pokemon'
import {NotFound} from './views/NotFound'


function App() {
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <header>
        <nav>
          <Link to="/pokemon">
            Pokemon
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" replace/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
