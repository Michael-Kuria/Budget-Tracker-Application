package com.michael.budgetTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Budget {

    @Id
    private LocalDate startDate;
    private LocalDate endDate;
    private int budget;
    private String financialGoals;

}
