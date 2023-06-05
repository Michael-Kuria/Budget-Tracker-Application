import * as React from "react";
import "./App.css";
import Main from "./pages/main/Main";
import { TransactionFilterProvider } from "./components/transactionFilter/TransactionFilterContext";

function App() {
  return (
    <TransactionFilterProvider>
      <Main />
    </TransactionFilterProvider>
  );
}

export default App;
