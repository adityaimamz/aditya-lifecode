import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const  [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('username',event.target.username.value);
    // localStorage.setItem('password',event.target.password.value);
    // window.location.href = '/product';
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Jhon Doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      <Button variant="bg-blue-500 w-full mt-3" type="submit">
        Submit
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
