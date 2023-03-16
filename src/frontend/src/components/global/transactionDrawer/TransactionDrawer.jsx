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
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import "./transactionDrawer.css";

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  zIndex: theme.zIndex.appBar + 1000,
}));

const categories = [
  {
    name: "housing",
    subCategory: ["rent", "householdRepairs"],
  },
  {
    name: "transportation",
    subCategory: ["carPayment", "gas", "public"],
  },
  {
    name: "food",
    subCategory: ["carPayment", "gas", "public"],
  },

  {
    name: "utilities",
    subCategory: ["carPayment", "gas", "public"],
  },
  {
    name: "clothing",
    subCategory: ["carPayment", "gas", "public"],
  },
  {
    name: "Medical",
    subCategory: ["carPayment", "gas", "public"],
  },
];

const TransactionDrawer = ({ isOpen, toggleTransactionDrawer }) => {
  const [date, setDate] = useState(new Date());
  const formik = useFormik({
    initialValues: {
      date: date,
      category: "housing",
      amount: 0,
      action: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: Yup.object({
      date: Yup.date().required("required"),
      category: Yup.string().required("required"),
      amount: Yup.number().required("required"),
      action: Yup.string(),
    }),
  });

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isOpen}
      onClose={toggleTransactionDrawer}
    >
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
                  <option key={index} value={category.name}>
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
            isInvalid={formik.touched.action && formik.errors.action}
          >
            <FormLabel htmlFor="action">Action</FormLabel>
            <Textarea id="action" {...formik.getFieldProps("action")} />
            <FormErrorMessage>{formik.errors.action}</FormErrorMessage>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Drawer>
  );
};

export default TransactionDrawer;
