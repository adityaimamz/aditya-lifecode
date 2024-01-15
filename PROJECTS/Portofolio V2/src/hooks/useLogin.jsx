import { useEffect, useState } from "react";
import { getUsename } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsename(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
