import { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      email,
      password,
    };
    localStorage.setItem("auth", JSON.stringify(item));
    navigate("/login");
  };

  return (
    <div className="bg-white mt-12 rounded py-12 px-6 shadow w-[50%] m-auto grid gap-4">
      <div className="grid gap-1 text-center">
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
        <Button text="register" />
      </form>
    </div>
  );
}
