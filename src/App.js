import "./App.css";
import Login from "./auth/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./auth/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route index path="/" element={<Login />} />
        <Route index path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
