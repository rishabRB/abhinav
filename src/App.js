import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact.js";


function App() {

  return (
   <>
     <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Router>
   </>
  )
}

export default App;
