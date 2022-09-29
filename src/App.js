import './App.css';
import Clicker from './components/clicker';

import Header from './components/Header/header';
import Message from './components/message';
import Car from "./components/CarExercise/Car.jsx"
import TestPage from './components/test';
import HistoryPage from './components/historyPage';
import MyContext from './components/context/context';
import {ThemeContext, ThemeToggle} from './components/context/ThemeContext';

import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import Data from './components/data/Data.jsx';
import { useReducer, useState } from 'react';

// Router < Routes < [Route]
{/* <Message isGreeting={true} name="Andrew"/> */}

function App() {



  const [context, setContext] = useState("Tets!");
  const [theme, toggleTheme] = useReducer(ThemeToggle, "dark")


  return (
    <BrowserRouter>
      

        <Header/>        
          
 
        <ThemeContext.Provider value={ {theme, toggleTheme} }>
        <MyContext.Provider value={ {context, setContext} }>
          <Routes>
            <Route path='/' element={<Data/>}/> 
            <Route path='/history' element={<HistoryPage/>}/>
            <Route path='/Test/:id' element={<TestPage/>}/>
            <Route path='/contact' element={<h1>Contact</h1>}/>
            <Route path='*' element={<h1>404 Not Found!</h1>}/>
          </Routes>

        </MyContext.Provider>
        </ThemeContext.Provider>
        <footer><p>Andrew McCall</p></footer>

        <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
    </BrowserRouter>
  );
}

export default App;
