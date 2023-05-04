import fetch from "unfetch";

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
