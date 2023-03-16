package com.michael.budgetTracker.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Year {

    @Id
    private int name;
    private List<Month> months;
}
