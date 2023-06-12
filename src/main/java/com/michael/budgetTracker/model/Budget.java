package com.michael.budgetTracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Month;
import java.time.Year;
import java.util.Comparator;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="budgets")
public class Budget implements Comparable<Budget> {

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


    @Override
    public int compareTo(Budget o) {
        Month thisMonth = Month.valueOf(this.month.toUpperCase());
        Month month = Month.valueOf(o.getMonth().toUpperCase());
        return this.year > o.getYear() ? -1 :
                this.year < o.year ? 1 :
                        month.compareTo(thisMonth);
    }
}
