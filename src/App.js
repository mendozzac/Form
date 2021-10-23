import "./App.css";
import AccessData from "./component/AccessData/AccessData";
import Login from "./component/Login/Login";
import Navigation from "./component/Navigation/Navigation";
import PersonalData from "./component/PersonalData/PersonalData";

function App() {
  return (
    <>
      <div className="container">
        <h1>HOLA mi gente!</h1>
        <PersonalData />
        <AccessData />
        <Login />
        <Navigation />
      </div>
    </>
  );
}

export default App;
