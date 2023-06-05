import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const TransactionFilterContext = createContext();

export const TransactionFilterProvider = ({ children }) => {
  const [transactionFilterValue, setTransactionFilterValue] = useState(1);
  const [transactionFilterList, setTransactionFilterList] = useState([
    {
      month: "All",
    },
    {
      month: "MARCH",
      year: "2023",
    },
    {
      month: "APRIL",
      year: "2023",
    },
    {
      month: "MAY",
      year: "2023",
    },
    {
      month: "JUNE",
      year: "2023",
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
