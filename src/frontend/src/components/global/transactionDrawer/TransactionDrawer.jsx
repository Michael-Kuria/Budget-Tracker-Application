import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MuiDrawer from "@mui/material/Drawer";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import "./transactionDrawer.css";
import { postTransaction } from "../../../client/Client";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  zIndex: theme.zIndex.appBar + 1000,
}));

const TransactionDrawer = ({
  categories,
  fetchAllTransactions,
  isTransactionDrawerOpen,
  toggleTransactionDrawer,
  fetchCategoriesAndSum,
}) => {
  const [date, setDate] = useState(new Date());

  const addTransaction = (transaction) => {
    postTransaction(transaction)
      .then(() => {
        console.log("Transaction added successfully");
        fetchAllTransactions();
        fetchCategoriesAndSum();
      })
      .catch((error) => {
        error.response.json().then((res) => {
          console.log(res);
        });
      });
  };

  const handleSubmitForm = (transaction) => {
    addTransaction({
      ...transaction,
      category: categories[parseInt(transaction.category)],
    });
    formik.handleReset();
  };

  const formik = useFormik({
    initialValues: {
      date: date,
      category: "1",
      amount: 0,
      description: "",
    },
    onSubmit: (values) => handleSubmitForm(values),
    validationSchema: Yup.object({
      date: Yup.date().required("required"),
      category: Yup.string().required("required"),
      amount: Yup.number().min(0).required("required"),
      description: Yup.string(),
    }),
  });

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isTransactionDrawerOpen}
      onClose={toggleTransactionDrawer}
    >
      <CssBaseline />
      <Box
        sx={{
          width: "450px",
          p: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography component="h3" variant="h5">
          New Transaction
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <DatePicker
              id="date"
              className="date-picker"
              selected={date}
              dateFormat="yyyy-MM-dd"
              {...formik.getFieldProps("date")}
              onChange={(dt) => setDate(dt)}
            />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formik.touched.category && formik.errors.category}
          >
            <FormLabel htmlFor="category">Category</FormLabel>
            <select id="category" {...formik.getFieldProps("category")}>
              {categories.map((category, index) => {
                return (
                  <option key={index} value={index}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.amount && formik.errors.amount}
          >
            <FormLabel htmlFor="amount">Amount</FormLabel>
            <Input
              type="number"
              id="amount"
              {...formik.getFieldProps("amount")}
            />
            <FormErrorMessage>{formik.errors.amount}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.description && formik.errors.description}
          >
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              {...formik.getFieldProps("description")}
            />
            <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            sx={{
              borderRadius: "100px",
              backgroundColor: "#007bff",
              color: "#fff",
              ":hover": {
                backgroundColor: "#1a88ff",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Drawer>
  );
};

export default TransactionDrawer;
