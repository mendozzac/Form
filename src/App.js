import "./App.css";
import segnorX from "./segnorX.png";
import AccessData from "./component/AccessData/AccessData";
import Login from "./component/Login/Login";
import Navigation from "./component/Navigation/Navigation";
import PersonalData from "./component/PersonalData/PersonalData";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <a href="/">
            <h1>¡HOLA mi gente!</h1>
          </a>
          <div className="app">
            <Route path="/" exact>
              <img src={segnorX} alt="señor X" />
            </Route>
            <Route component={PersonalData} path="/1" />
            <Route component={AccessData} path="/2" />
            <Route component={Login} path="/3" />
          </div>
          <Navigation />
        </Router>
      </div>
    </>
  );
}

export default App;
