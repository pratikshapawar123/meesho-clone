import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
    
     <Navbar/>
     <Home/>
     <Footer/>
     
    </div>
  );
}

export default App;
