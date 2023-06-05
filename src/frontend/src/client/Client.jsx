import axios from "axios";
import fetch from "unfetch";
import { parseJWTToken } from "../components/helpers/Helpers";
import { useAuth } from "../components/AuthContext/AuthContext";

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

export function getAllTransactions(token) {
  // console.log(token?.token);
  return fetch("/api/transaction", {
    headers: {
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
  }).then(checkStatus);
}

export function getTransactionsByMonth(yearMonth, token) {
  return fetch("/api/transaction/" + yearMonth.year + "/" + yearMonth.month, {
    headers: {
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
  }).then(checkStatus);
}

export function getCategoriesAndSum(token, filter) {
  if (filter.month === "All") {
    return fetch("api/category/categories-and-sum", {
      headers: {
        Authorization: `Bearer ${token ? token.token : ""}`,
      },
    }).then(checkStatus);
  } else {
    return fetch(
      "api/category/categories-and-sum/" + filter.year + "/" + filter.month,
      {
        headers: {
          Authorization: `Bearer ${token ? token.token : ""}`,
        },
      }
    ).then(checkStatus);
  }
}

export function getCategories(token) {
  return fetch("api/category", {
    headers: {
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
  }).then(checkStatus);
}

export function getBudget(filter, token) {
  if (filter.month === "All") {
    return fetch("api/budget/total", {
      headers: {
        Authorization: `Bearer ${token ? token.token : ""}`,
      },
    }).then(checkStatus);
  } else {
    return fetch("api/budget/" + filter.year + "/" + filter.month, {
      headers: {
        Authorization: `Bearer ${token ? token.token : ""}`,
      },
    }).then(checkStatus);
  }
}

export function getBudgets(token) {
  return fetch("api/budget", {
    headers: {
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
  }).then(checkStatus);
}

export function getBudgetByYearAndMonth(year, month, token) {
  return fetch("api/budget/" + year + "/" + month, {
    headers: {
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
  }).then(checkStatus);
}

export function postBudget(budget, token) {
  return fetch("api/budget", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
    method: "POST",
    body: JSON.stringify(budget),
  }).then(checkStatus);
}

export function postTransaction(transaction, token) {
  return fetch("api/transaction", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
    method: "POST",
    body: JSON.stringify(transaction),
  }).then(checkStatus);
}

export function deleteTransaction(id, token) {
  return fetch(`api/transaction/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token ? token.token : ""}`,
    },
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
