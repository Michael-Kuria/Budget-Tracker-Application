import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const TransactionFilterContext = createContext();

export const TransactionFilterProvider = ({ children }) => {
  const [transactionFilterValue, setTransactionFilterValue] = useState(0);
  const [transactionFilterList, setTransactionFilterList] = useState([
    {
      month: "All",
    },
  ]);

  const setFilterValue = useCallback(
    (value) => setTransactionFilterValue(value),
    []
  );
  const setFilterList = useCallback(
    (list) => setTransactionFilterList(list),
    []
  );

  return (
    <TransactionFilterContext.Provider
      value={{
        transactionFilterValue,
        setFilterValue,
        transactionFilterList,
        setFilterList,
      }}
    >
      {children}
    </TransactionFilterContext.Provider>
  );
};

export const useTransactionFilterContext = () => {
  const filterContext = useContext(TransactionFilterContext);

  if (filterContext == undefined) {
    return new Error(
      "TransactionFilterContext has been used outside of its provider"
    );
  }

  return filterContext;
};
