// NOT useHistory
import {useNavigate} from "react-router-dom";
import {useEffect, useContext} from "react"

import "./history.css"

import MyContext from "./context/context";
import {ThemeContext} from "./context/ThemeContext";
import Toolbar from "./Toolbar";

const HistoryPage = () => {
    // const pageManager = useNavigate();

    // const reboud = "/test/253"

    // useEffect( () => {
    //     pageManager(reboud)
    // })
   
    // return(<h1>ERRORRROROR!</h1>)

    const {context, setContext} = useContext(MyContext)
    
    const ButtonClick = (e) => {
        setContext(context + "!")
    }

    const {theme, toggleTheme} = useContext(ThemeContext)

    return(<div className={theme}>

        <div>
            <button onClick={ButtonClick}> Edit </button>
            <p>{context}</p>
        </div>

        <div>
            <Toolbar toggleTheme={toggleTheme}></Toolbar>
            
            <p>{theme}</p>
        </div>

    </div>)

}

export default HistoryPage;