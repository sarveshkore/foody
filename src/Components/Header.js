// // import {FaYoutube} from 'react-icons/fa';
// import Link from 'react-router-dom'
// import Logo from '../asset/images/foody-logo.png'
// const Header=()=>{
//     return(
//         <>
//             {/* <h1>This is Header Component</h1> */}
          
//              <nav className="navbar navbar-expand-sm p-1 navbar-light fixed-top"> {/*mb-5*/}
//                 <div className="container-fluid">
//                 {/* <a className="navbar-brand" href="#"><img src='http://www.romanianstartups.com/wp-content/uploads/2014/11/foody-logo.png' width="75px"/></a> */}
//                 <Link className="navbar-brand" to="#"><img src={Logo} width="75px" alt='logo'/></Link>
                
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
//                 <ul className="navbar-nav">
//                 <li className="nav-item">
//                 <Link className="nav-link" to="/cart">Cart</Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link className="nav-link" to="/about">About Us</Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact Us</Link>
//                 </li>    
//                 </ul>
//                 </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Header;


// import {FaYoutube} from 'react-icons/fa';
import Logo from '../asset/images/foody-logo.png'
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <>
            {/* <h1>This is Header Component</h1> */}
          
             <nav className="navbar navbar-expand-sm p-1 navbar-light "style={{position:"sticky",left:"0",top:"0"}}> {/*mb-5*/}
                <div className="container-fluid">
                {/* <a className="navbar-brand" href="#"><img src='http://www.romanianstartups.com/wp-content/uploads/2014/11/foody-logo.png' width="75px"/></a> */}
                <a className="navbar-brand" href="/"><img src={Logo} width="75px" alt='logo'/></a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>    
                </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Header;