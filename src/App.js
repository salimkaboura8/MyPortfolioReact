import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Aboutme from "./components/Aboutme";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Aboutme" exact component={Aboutme} />
      </div>
    </Router>
  );
}

export default App;
