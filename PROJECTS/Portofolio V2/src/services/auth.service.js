/* eslint-disable no-undef */
import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("localhost:3000/api/v1/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsename = (token) => {
    const decoded = jwt_decode(token);
    return decoded.user;
}