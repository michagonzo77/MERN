import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Bottom">
        <Navigation/>
        <Main>
          <div className="SubContentsFlex">
          <SubContents/>
          <SubContents/>
          <SubContents/>
          </div>
          <div className="Advertisement">
          <Advertisement/>
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
