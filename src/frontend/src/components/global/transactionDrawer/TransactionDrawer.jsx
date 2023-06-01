import React, { useEffect, useState } from "react";
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
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import { useFormik } from "formik";
import "./transactionDrawer.css";
import { postTransaction } from "../../../client/Client";
import { useAuth } from "../../AuthContext/AuthContext";
import Drawer from "../drawer/Drawer";

const TransactionDrawer = ({
  categories,
  fetchAllTransactions,
  isTransactionDrawerOpen,
  toggleTransactionDrawer,
  fetchCategoriesAndSum,
  transactionToEdit,
  setTransactionToEdit,
}) => {
  const [date, setDate] = useState(transactionToEdit.date);
  const [drawerName, setDrawerName] = useState("New");
  const { getToken } = useAuth();

  /**
   * for resetting the TransactionToEdit state after closing the drawer and when editing is completed
   */
  const resetTransactionToEdit = () => {
    setTransactionToEdit({
      date: new Date(),
      category: { name: "Housing" },
      amount: 0,
      description: "",
    });
  };

  /**
   * Perform both update and create operations: To be updated to do this separately.
   * After successful creating/update fetch updated data from the api
   */
  const addTransaction = (transaction) => {
    const token = getToken();
    postTransaction(transaction, token)
      .then(() => {
        console.log("Transaction added successfully");
        console.log(JSON.stringify(transaction));
        fetchAllTransactions();
        fetchCategoriesAndSum();
        resetTransactionToEdit();
      })
      .catch((error) => {
        error.response.json().then((res) => {
          console.log(res);
        });
      });
  };

  /**
   *
   * Category is and integer but it will need to be mapped to it's respective Category object
   */
  const handleSubmitForm = (transaction) => {
    addTransaction({
      ...transaction,
      category: categories[parseInt(transaction.category)],
    });

    formik.handleReset();
  };

  /**
   * formik for form initialization and validation
   *
   * When enableReinitialize is true, it will reset the form once the initialvalues changes.
   */

  const formik = useFormik({
    initialValues: {
      date: date,
      category: categories.findIndex(
        (item) => item.name === transactionToEdit.category.name
      ),
      amount: transactionToEdit.amount,
      description: transactionToEdit.description,
    },
    onSubmit: (values) =>
      handleSubmitForm({
        id: transactionToEdit.id,
        ...values,
      }),
    validationSchema: Yup.object({
      date: Yup.date().required("required"),
      category: Yup.string().required("required"),
      amount: Yup.number().min(0).required("required"),
      description: Yup.string(),
    }),
    enableReinitialize: true,
  });

  /**
   * The date field is already being maintained as a state, this function will
   * update the value when it is received as a String from the table during editting or as a date during resetting
   * when the transactionToEdit state changes
   *
   */
  useEffect(() => {
    if (!(transactionToEdit.date instanceof Date)) {
      // var dateParts = transactionToEdit.date.split("-"); // formated as yyyy-MM-dd
      // console.log(transactionToEdit.date)
      // setDate(new Date(dateParts[0], dateParts[1] - 1, dateParts[2]));
      setDrawerName("Edit");
      setDate(new Date(transactionToEdit.date));
    } else {
      setDrawerName("Add");
      setDate(transactionToEdit.date);
    }
  }, [transactionToEdit]);

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isTransactionDrawerOpen}
      onClose={() => {
        toggleTransactionDrawer();
        resetTransactionToEdit();
      }}
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
          {drawerName} Transaction
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
