import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`flex justify-center min-h-screen font-bold items-center ${isDarkMode && "bg-slate-900"}`}
    >
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
        >{isDarkMode ? "Light" : "Dark"}</button>
        <h1 className="text-blue-500 font-bold text-3xl mb-1">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Please Fill Your Detail
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-4 font-medium text-center">
        Dont have an account ?&nbsp;
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
    );
  }
};

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
