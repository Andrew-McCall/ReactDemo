import './App.css';
import Clicker from './components/clicker';

import Header from './components/Header/header';
import Message from './components/message';
import Car from "./components/CarExercise/Car.jsx"

function App() {
  return (
    <div className="App">
      <Header/>
      <Message name={"Andrew McCall"} isGreeting={false}/>
      <Clicker/>
      <br/>
      <Car/>
    </div>
  );
}

export default App;
