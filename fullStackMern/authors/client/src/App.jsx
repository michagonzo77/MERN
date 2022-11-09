import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AllAuthors } from './views/AllAuthors';
import { EditAuthor } from './views/EditAuthor';
import { OneAuthor } from './views/OneAuthor';
import { NewAuthor } from './views/NewAuthor';
import { NotFound } from './views/NotFound';
import { NoAuthorFound } from './views/NoAuthorFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <div className="navbar-nav justify-content-between">
          <h2 className="mx-1">Favorite Authors</h2>
          <Link
            to="/authors"
            className='btn btn-sm btn-outline-primary mx-1'>
              Home
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/authors' replace/>}/>
        <Route path='/authors' element={<AllAuthors/>}/>
        <Route path='/authors/:id/edit' element={<EditAuthor/>}/>
        <Route path='/authors/:id' element={<OneAuthor/>}/>
        <Route path='/authors/new' element={<NewAuthor/>}/>
        <Route path='/authors/nonefound' element={<NoAuthorFound/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
