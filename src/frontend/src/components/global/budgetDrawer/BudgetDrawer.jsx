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
import { useAuth } from "../../AuthContext/AuthContext";
import { postBudget } from "../../../client/Client";
import { handleLogError } from "../../helpers/Helpers";

const BudgetDrawer = ({
  openBudgetDrawer,
  toggleBudgetDrawer,
  fetchAllBudgets,
  budgetToEdit,
  setBudgetToEdit,
}) => {
  const date = new Date();
  const { getToken } = useAuth();

  const addBudget = (budget) => {
    const token = getToken();

    postBudget(budget, token)
      .then(() => {
        fetchAllBudgets();
        setBudgetToEdit(null);
      })
      .catch((error) => {
        handleLogError(error);
      });
  };

  const handleSubmitForm = (values) => {
    console.log(values);
    budgetToEdit === null
      ? addBudget({
          ...values,
          year: date.getFullYear(),
        })
      : addBudget({
          ...values,
          year: date.getFullYear(),
          id: budgetToEdit.id,
        });
    formik.handleReset();
  };

  const formik = useFormik({
    initialValues: {
      month: budgetToEdit !== null ? budgetToEdit.month : date.getMonth(),
      budget: budgetToEdit !== null ? budgetToEdit.budget : 30000,
      financialGoals: budgetToEdit !== null ? budgetToEdit.financialGoals : "",
    },
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
    validationSchema: Yup.object({
      month: Yup.string().required("required"),
      budget: Yup.number().min(0).required("required"),
      financialGoals: Yup.string(),
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
        setBudgetToEdit(null);
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
              {budgetToEdit === null ? (
                monthNames
                  .filter((month, index) => index >= date.getMonth())
                  .map((month, index) => {
                    return (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    );
                  })
              ) : (
                <option>{budgetToEdit.month}</option>
              )}
            </select>
            <FormErrorMessage>{formik.errors.month}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.amount && formik.errors.amount}
          >
            <FormLabel htmlFor="budget">Budget</FormLabel>
            <Input
              type="number"
              id="budget"
              {...formik.getFieldProps("budget")}
            />
            <FormErrorMessage>{formik.errors.budget}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              formik.touched.financialGoals && formik.errors.financialGoals
            }
          >
            <FormLabel htmlFor="financialGoals">Financial Goals</FormLabel>
            <Textarea
              id="financialGoals"
              {...formik.getFieldProps("financialGoals")}
            />
            <FormErrorMessage>{formik.errors.financialGoals}</FormErrorMessage>
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
