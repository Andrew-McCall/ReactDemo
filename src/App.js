import './App.css';
import Clicker from './components/clicker';

import Header from './components/Header/header';
import Message from './components/message';


function App() {
  return (
    <div className="App">
      <Header/>
      <Message name={"Andrew McCall"} isGreeting={false}/>
      <Clicker/>
    </div>
  );
}

export default App;
