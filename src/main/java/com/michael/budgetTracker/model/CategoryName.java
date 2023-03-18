package com.michael.budgetTracker.model;

public enum CategoryName {
    HOUSING("housing"),
    TRANSPORTATION("transaportation"),
    FOOD("food"),
    UTILITIES("utilities"),
    CLOTHING("clothing"),
    MEDICAL("medical"),
    HOUSEHOLD_SUPPLIES("household_supplies"),
    PERSONAL("personal"),
    DEBT("debt");

    private String value;
    CategoryName(String value){
        this.value = value;
    }

}
