export const parseJWTToken = (token) => {
  if (!token) return;
  const base64encodedPayload = token.split(".")[1];
  return JSON.parse(window.atob(base64encodedPayload));
};
