import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState } from "react";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        },0);
        setTotalCart(sum);
    }, [cart]);
     const handleLogout = () => {
       localStorage.removeItem("token");
       localStorage.removeItem("password");
       window.location.href = "/login";
     };
  return (
    <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
      {username}
      <button
        className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-3 m-5 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        <div>{totalCart}</div>
      </div>
    </div>
  );
};

export default Navbar;
