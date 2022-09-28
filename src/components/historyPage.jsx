// NOT useHistory
import {useNavigate} from "react-router-dom";

const HistoryPage = () => {
    
    const pageManager = useNavigate();

    const OneClick = (e) => {
        e.preventDefault();
        pageManager("/")
    }

    return(<button onClick={OneClick}> Ruby </button>)

}

export default HistoryPage;