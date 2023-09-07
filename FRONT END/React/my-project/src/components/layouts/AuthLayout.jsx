import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen font-bold items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-500 font-bold text-3xl mb-1">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Please Welcome Your Detail
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

 const Navigation = ({type}) => {
   if (type === "login"){
     return (
       <p className="text-sm mt-4 font-medium text-center">
         Don't have an account ?&nbsp; 
         <Link to="/register" className="text-blue-500">
           Sign Up
         </Link>
       </p>
     );
   } else {
    return (
      <p className="text-sm mt-4 font-medium text-center">
        Already have an account ?{" "} 
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
        </p>
    )
   }
 }

export default AuthLayout;

  //  <p className="text-sm mt-4 font-medium text-center">
  //    {type === "login"
  //      ? "Don't have an account ? "
  //      : "Already have an account ? "}
  //    {type === "login" && (
  //      <Link to="/register" className="text-blue-500">
  //        Sign Up
  //      </Link>
  //    )}
  //    {type === "register" && (
  //      <Link to="/login" className="text-blue-500">
  //        Login
  //      </Link>
  //    )}
  //  </p>;