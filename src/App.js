import './App.css';
import Auth from './Components/Auth';
import Bookcarform from './Components/Bookcarform';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Allroute from './Pages/Allroute';
import Home from './Pages/Home';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
      <Navbar/>
      <Allroute/>
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
