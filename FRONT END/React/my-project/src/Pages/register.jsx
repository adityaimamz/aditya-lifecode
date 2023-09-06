import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
