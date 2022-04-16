
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HowItWorks from "./pages/Howitworks";
import OurAdvantge from "./pages/Ouradvantage";
import {BrowserRouter as Router,Routes,Route,Link}from "react-router-dom";
function App() {
  return (
    <div className="container-fliud">
     
     <container>
      <header className="App-header">
      <body>
 
 <Router>
   
   <nav className="navbar_div" id="navbarSupportedContent">
 
     <Link to="/Howitworks"> howITWorks</Link>
     <Link to="/Ouradvantage"> ourAdvantge</Link>
 </nav>
  
   <Routes>
     <Route path="/Howitworks" element={<HowItWorks/>} />
     <Route path="/Ouradvantage" element={<OurAdvantge/>} /> 
   </Routes>
 </Router>
 </body>
      </header>
      </container>
    </div>
  );
}

export default App;
