package com.michael.budgetTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Entity
@Data
public class Month {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private int budgetAmount;
    private String name;
    private Year year;
    private List<Transaction> transactions;

}
