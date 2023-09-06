import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
      <AuthLayout title="Login">
        <FormLogin />
        <p className="text-sm mt-4 font-medium text-center">
          Dont have an account ?{" "}
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </AuthLayout>
    );
}

export default LoginPage