import { Box, Select } from "@mui/material";
import { useContext } from "react";
import { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { useTransactionFilterContext } from "./TransactionFilterContext";

const TransactionFilter = () => {
  const { transactionFilterList, setFilterValue, transactionFilterValue } =
    useTransactionFilterContext();

  const handleSelection = (e) => {
    const value = e.target.value;
    console.log(value);
    setFilterValue(value);
  };

  return (
    <Box
      sx={{
        width: "30%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <select
        value={transactionFilterValue}
        onChange={handleSelection}
        className="select"
      >
        {transactionFilterList.map((yearMonth, index) => (
          <option key={index} value={index}>
            {yearMonth.month +
              " " +
              `${yearMonth.year !== undefined ? yearMonth.year : ""}`}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default TransactionFilter;
