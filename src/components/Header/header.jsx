import {Link} from "react-router-dom";

const Header = () => {
    const id = 250;
    return(
        <header className="App-header">
            <Link to="/"> Home </Link>
            <Link to="contact"> Contact Us </Link>
            <Link to={`Test/${id}`}> Test </Link>
        </header>
    )
    
}

export default Header;