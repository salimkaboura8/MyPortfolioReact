import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import Services from "./components/Services";
import Aboutme from "./components/Aboutme";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Route path="/" exact component={Header} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/Services" exact component={Services} />
      <Route path="/Aboutme" exact component={Aboutme} />
    </Router>
  );
}

export default App;
