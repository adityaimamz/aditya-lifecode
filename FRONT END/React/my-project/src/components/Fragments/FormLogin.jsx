import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email',event.target.email.value);
    localStorage.setItem('password',event.target.password.value);
    window.location.href = '/product';
  };

  const emailRef = useRef();
  
  useEffect(() => {
    emailRef.current.focus();
  })

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      <Button variant="bg-blue-500 w-full mt-3" type="submit">Submit</Button>
    </form>
  );
};

export default FormLogin;
