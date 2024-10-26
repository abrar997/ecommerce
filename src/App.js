import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Profile from "./pages/Profile";
import Register from "./auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        {!localStorage.getItem("auth") ? (
          <Route index path="/" element={<Login />} />
        ) : (
          <Route path="/" index element={<Home />} />
        )}
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />

        <Route index path="profile" element={<Profile />} />
        <Route index path="login" element={<Login />} />
        <Route index path="logout" element={<Logout />} />
        <Route index path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
