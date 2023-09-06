import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button variant="bg-blue-500 w-full mt-3">Submit</Button>
    </form>
  );
};

export default FormLogin;
