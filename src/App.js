import './App.css';
import Clicker from './components/clicker';

import Header from './components/Header/header';
import Message from './components/message';
import Car from "./components/CarExercise/Car.jsx"
import TestPage from './components/test';
import HistoryPage from './components/historyPage';
import MyContext from './components/context/context';

import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import Data from './components/data/Data.jsx';
import { useState } from 'react';

// Router < Routes < [Route]
{/* <Message isGreeting={true} name="Andrew"/> */}

function App() {

  const [context, setContext] = useState("Tets!");
  return (
    <BrowserRouter>
      

        <Header/>
        <MyContext.Provider value={ {context, setContext} }>
          <Routes>
            <Route path='/' element={<Data/>}/> 
            <Route path='/history' element={<HistoryPage/>}/>
            <Route path='/Test/:id' element={<TestPage/>}/>
            <Route path='/contact' element={<h1>Contact</h1>}/>
            <Route path='*' element={<h1>404 Not Found!</h1>}/>
          </Routes>
        </MyContext.Provider>
        <footer><p>Andrew McCall</p></footer>

        
    </BrowserRouter>
  );
}

export default App;
