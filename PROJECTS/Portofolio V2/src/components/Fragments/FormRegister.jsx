import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="your name"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="password"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="password"
        name="ConfirmPassword"
      />
      <Button variant="bg-blue-500 w-full mt-3">Reguster</Button>
    </form>
  );
};

export default FormRegister;
