// import {FaYoutube} from 'react-icons/fa';
import Logo from '../asset/images/foody-logo.png'
const Header=()=>{
    return(
        <>
            {/* <h1>This is Header Component</h1> */}
          
            <nav className="navbar navbar-expand-sm p-1 navbar-light">
                <div className="container-fluid">
                {/* <a className="navbar-brand" href="#"><img src='http://www.romanianstartups.com/wp-content/uploads/2014/11/foody-logo.png' width="75px"/></a> */}
                <a className="navbar-brand" href="#"><img src={Logo} width="75px" alt='logo'/></a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
                </li>    
                </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Header;