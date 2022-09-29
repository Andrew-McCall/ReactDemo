// NOT useHistory
import {useNavigate} from "react-router-dom";
import {useEffect, useContext} from "react"

import MyContext from "./context/context";

const HistoryPage = () => {
    // const pageManager = useNavigate();

    // const reboud = "/test/253"

    // useEffect( () => {
    //     pageManager(reboud)
    // })
   
    // return(<h1>ERRORRROROR!</h1>)

    var {context, setContext} = useContext(MyContext)
    
    const ButtonClick = (e) => {
        setContext(context + "!")
    }


    return(<>
    <button onClick={ButtonClick}> Edit </button>
    <p>{context}</p>
    </>)

}

export default HistoryPage;