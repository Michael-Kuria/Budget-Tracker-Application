package com.michael.budgetTracker.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime modificationDate;
    private int amount;
    private String description;

    @ManyToOne
    @JoinColumn(name="category_id", referencedColumnName = "id", nullable = false, updatable = true)
    private Category category;

//    private Account account;

    public Transaction() {
        modificationDate = LocalDateTime.now();
    }

}
