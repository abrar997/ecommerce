import { useEffect, useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setValidation("Full Name is required");
    } else if (!email) {
      setValidation("Email is required");
    } else if (!password) {
      setValidation("Password is required");
    } else {
      const item = {
        name,
        email,
        password,
      };
      localStorage.setItem("auth", JSON.stringify(item));
      navigate("/login");
    }
  };

  return (
    <div className="bg-white mt-12 rounded py-12 px-6 shadow w-[50%] m-auto grid gap-4">
      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="text-gray-400">create new account</p>
      </div>
      <form className="text-left grid gap-5" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full Name"
          placeholder="John Smith"
          to="fname"
          value={name}
          setValue={setName}
        />
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
        {validation && <p className="text-red-500 text-sm">{validation}</p>}
        <Button text="register" />
      </form>
    </div>
  );
}
