import axios from "axios";
import fetch from "unfetch";
import { parseJWTToken } from "../components/helpers/Helpers";

/**
 * All client communication the api will be done from this file
 * Function to check if the response if okay if not
 * return the error
 */

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
};

export function getAllTransactions() {
  return fetch("/api/transaction").then(checkStatus);
}

export function getCategoriesAndSum() {
  return fetch("api/category/categories-and-sum").then(checkStatus);
}

export function getCategories() {
  return fetch("api/category").then(checkStatus);
}

export function getBudget(id) {
  return fetch("api/budget/" + id).then(checkStatus);
}

export function postTransaction(transaction) {
  return fetch("api/transaction", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(transaction),
  }).then(checkStatus);
}

export function deleteTransaction(id) {
  return fetch(`api/transaction/${id}`, {
    method: "DELETE",
  }).then(checkStatus);
}

/**
 * Using Axios
 */

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(
  function (config) {
    if (config.headers.Authorization) {
      const token = config.headers.Authorization.split(" ")[1]; // part containing "Bearer {token}";
      const data = parseJWTToken(token);

      if (Date.now() > data.exp * 1000) {
        window.location.href = "/login";
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const authenticate = (email, password) => {
  return instance.post(
    "/login",
    { email, password },
    { headers: { "Content-Type": "application/json" } }
  );
};

export const Client = {
  authenticate,
};
