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

export default function getAllTransactions() {
  return fetch("/api/transaction").then(checkStatus);
}
