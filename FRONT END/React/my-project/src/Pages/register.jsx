import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <FormRegister></FormRegister>
        <p className="text-sm mt-4 font-medium text-center">You already have an account ? <Link to="/login" className="text-blue-500">Login</Link></p>
    </AuthLayout>
  );
};

export default RegisterPage;
