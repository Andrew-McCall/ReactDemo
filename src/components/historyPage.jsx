// NOT useHistory
import {useNavigate} from "react-router-dom";
import {useEffect} from "react"

const HistoryPage = () => {
    const pageManager = useNavigate();

    const reboud = "/test/253"

    useEffect( () => {
        pageManager(reboud)
    })
   
    return(<h1>ERRORRROROR!</h1>)

}

export default HistoryPage;