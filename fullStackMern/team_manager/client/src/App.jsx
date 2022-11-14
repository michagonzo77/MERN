import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AllPlayers } from './views/AllPlayers';
import { EditPlayer } from './views/EditPlayer';
import { OnePlayer } from './views/OnePlayer';
import { NewPlayer } from './views/NewPlayer';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar bg-light sticky-top justify-content-center mb-4">
        <div>
          <Link
            to="/players/list"
            className='btn btn-sm btn-outline-primary mx-1'>
              Manager Players
          </Link>
          <Link
            to="/players/new"
            className='btn btn-sm btn-outline-primary mx-1'>
              Manage Player Status
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/players/list' replace/>}/>
        <Route path='/players/list' element={<AllPlayers/>}/>
        <Route path='/players/:id/edit' element={<EditPlayer/>}/>
        <Route path='/players/:id' element={<OnePlayer/>}/>
        <Route path='/players/new' element={<NewPlayer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
