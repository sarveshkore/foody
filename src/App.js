// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
// import Body from './Components/Body';
import Footer from './Components/Footer';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
    {/* <h1 className="text-danger ">App Component</h1> */}
    <Header/>
    {/* <Body/> */}
    <Outlet/>
    <Footer/>

    </>
  );
}

export default App;
