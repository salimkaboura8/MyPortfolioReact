import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
