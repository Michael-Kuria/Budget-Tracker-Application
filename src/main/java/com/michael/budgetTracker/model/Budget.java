package com.michael.budgetTracker.model;

import jakarta.persistence.*;
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
@Table(name="budgets")
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String month;
    private int year;
    private int budget;
    private String financialGoals;

    public Budget(String month, int year, int budget, String financialGoals){
        this.month = month;
        this.year = year;
        this.budget = budget;
        this.financialGoals = financialGoals;
    }

}
