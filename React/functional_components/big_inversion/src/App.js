import './App.css';

import {PersonCard} from "./components/Person"


function App() {
  return (
    <div className="App">
    <PersonCard firstName="Michael" lastName="Gonzalez" age={32} color={"Brown"}/>
    <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} color={"Black"}/>
    <PersonCard firstName={"John"} lastName={"Smith"} age={88} color={"Brown"}/>
    <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} color={"Blonde"}/>
    </div>
    );
}

export default App;
