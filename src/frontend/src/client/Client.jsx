import fetch from "unfetch";

/**
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

export function getBudget(id) {
  return fetch("api/budget/" + id).then(checkStatus);
}
