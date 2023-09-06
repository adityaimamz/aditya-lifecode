import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";
const LoginPage = () => {
    return (
      <AuthLayout title="Login">
        <FormLogin />
      </AuthLayout>
    );
}

export default LoginPage