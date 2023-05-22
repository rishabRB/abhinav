import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Decrypt from "./Pages/Decrypt";
import Home from "./Pages/Home";


function App() {

  return (
   <>
     <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/decrypt" element={<Decrypt />} />
      </Routes>
     </Router>
   </>
  )
}

export default App;
