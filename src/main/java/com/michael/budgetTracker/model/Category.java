package com.michael.budgetTracker.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Table(name="categories")
@NoArgsConstructor
public class Category{

    @Id
//    @GeneratedValue(strategy = GenerationType.UUID)
    private int id;

    private String name;
    private int amount;
    private String description;

    public Category(int id, String name, int amount, String description){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.description = description;
    }
}