import './App.css';
import Clicker from './components/clicker';

import Header from './components/Header/header';
import Message from './components/message';
import Car from "./components/CarExercise/Car.jsx"
import TestPage from './components/test';
import HistoryPage from './components/historyPage';

import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";

// Router < Routes < [Route]

function App() {
  return (
    <BrowserRouter>

        <Header/>

          <Routes>

            <Route path='/' element={<Message isGreeting={true} name="Andrew"/>}/>
            <Route path='/history' element={<HistoryPage/>}/>
            <Route path='/Test/:id' element={<TestPage/>}/>
            <Route path='/contact' element={<h1>Contact</h1>}/>

            <Route path='*' element={<h1>404 Not Found!</h1>}/>

          </Routes>
        
        <footer><p>Andrew McCall</p></footer>
      
    </BrowserRouter>
  );
}

export default App;
