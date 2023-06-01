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
import { Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import Drawer from "../drawer/Drawer";
import "../transactionDrawer/transactionDrawer.css";
import { monthNames } from "../../helpers/Helpers";

const BudgetDrawer = ({ openBudgetDrawer, toggleBudgetDrawer }) => {
  const date = new Date();
  const handleSubmit = () => {
    console.log(date);
    console.log(date.getMonth());
  };
  const formik = useFormik({
    initialValues: {
      month: date.getMonth(),
      amount: 30000,
      description: "",
    },
    onSubmit: (values) => handleSubmit(values),
    validationSchema: Yup.object({
      month: Yup.string().required("required"),
      amount: Yup.number().min(0).required("required"),
      description: Yup.string(),
    }),
    enableReinitialize: true,
  });

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={openBudgetDrawer}
      onClose={() => {
        toggleBudgetDrawer();
      }}
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
          Add Budget
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.month && formik.errors.month}>
            <FormLabel htmlFor="month">Month</FormLabel>
            <select id="month" {...formik.getFieldProps("month")}>
              {monthNames
                .filter((month, index) => index >= date.getMonth())
                .map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  );
                })}
              ;
            </select>
            <FormErrorMessage>{formik.errors.month}</FormErrorMessage>
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

export default BudgetDrawer;
