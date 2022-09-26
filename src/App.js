import './App.css';

import Header from './components/Header/header';
import Message from './components/message';


function App() {
  return (
    <div className="App">
      <Header/>
      <Message name={"Andrew McCall"} isGreeting={false}/>
    </div>
  );
}

export default App;
