import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import CustomRoutes from "./components/routes";

function App() {
  return (
    <Router> 
      <CustomRoutes />
    </Router>
  );
}

export default App;
