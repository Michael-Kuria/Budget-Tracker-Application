package com.michael.budgetTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Month;
import java.time.Year;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private Month month;
    private Year year;
    private int budget;
    private String financialGoals;

    public Budget(Month month, Year year, int budget, String financialGoals){
        this.month = month;
        this.year = year;
        this.budget = budget;
        this.financialGoals = financialGoals;
    }

}
