import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<Home/>}/>
      {/* <Route path="/Home" element={<Logi />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App;