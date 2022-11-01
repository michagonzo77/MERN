import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {Launches} from './views/Launches'
import {OneLaunch} from './views/OneLaunch'
import {NotFound} from './views/NotFound'

function App() {
  return (
    <div style={{width: '80%', margin: '0 auto'}}>
      <header>
        <nav>
          <Link to="/launches">
            Launches
          </Link>
        </nav>
      </header>
    <Routes>
      <Route path="/" element={<Navigate to="/launches" replace/>}/>
      <Route path="/launches" element={<Launches/>}/>
      <Route path="/onelaunch/:id" element={<OneLaunch/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>


    </div>
  );
}

export default App;
