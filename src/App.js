import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Realm from "./components/Realm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/realm" element={<Realm />} />
      </Routes>
    </div>
  );
}

export default App;
