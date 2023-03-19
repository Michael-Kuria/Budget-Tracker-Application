package com.michael.budgetTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Budget {

    @Id
    private LocalDate startDate;
    private LocalDate endDate;
    private int income;
    private String financialGoals;

}
