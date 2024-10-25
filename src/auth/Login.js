import { useEffect, useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  let navigate = useNavigate();

  const data = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : [];

  let name = data.name;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === email && data.password === password) {
      navigate("/home");
    } else {
      setValidation("email or password incorrect please try again");
    }
  };

  return (
    <div>
      <div className="bg-white mt-12 rounded py-12 px-6 shadow w-[50%] m-auto grid gap-4">
        <div className="grid gap-1 text-center">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            Welcome
            <span className="text-pink-700"> {name} </span>
          </h1>
        </div>
        <form className="text-left grid gap-5" onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            placeholder="example@gmail.com"
            to="email"
            value={email}
            setValue={setEmail}
          />
          <Input
            type="password"
            label="Password"
            placeholder="*******"
            to="password"
            value={password}
            setValue={setPassword}
          />
          {validation && <p className="text-red-500">{validation}</p>}
          <Button text="Log in" />
          <p className="text-sm text-gray-500">
            if u don't have an account ,
            <Link
              to="/register"
              className="text-blue-500 px-1 hover:text-blue-700"
            >
              create new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
